using LibraryFilms.Web.Core;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace LibraryFilms.Web.Services
{
    public interface IPermissionsService
    {
        public Task<Response<List<Permission>>> GetListAsync();
    }

    public class PermissionsService : IPermissionsService
    {
        private readonly DataContext _context;

        public PermissionsService(DataContext context)
        {
            _context = context;
        }

        public async Task<Response<List<Permission>>> GetListAsync()
        {
            try 
            { 
                List<Permission> list = await _context.Permissions.ToListAsync();

                return new Response<List<Permission>> 
                { 
                    IsSuccess = true,
                    Message = "Permisos obtenidos con éxito",
                    Result = list
                };

                
            }
            catch (Exception ex) 
            {
                return new Response<List<Permission>>
                {
                    IsSuccess = false,
                    Message = ex.Message,
                    
                };
            }

            throw new NotImplementedException();
        }
    }

    
}
