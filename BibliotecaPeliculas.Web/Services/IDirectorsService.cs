using LibraryFilms.Web.Core;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace LibraryFilms.Web.Services
{
    public interface IDirectorsService
    {
        public Task<Response<List<Director>>> GetListAsyc();
    }

    public class DirectorsService : IDirectorsService
    {
        private readonly DataContext _context;

        public DirectorsService(DataContext context)
        {
            _context = context;
        }

        public async Task<Response<List<Director>>> GetListAsyc()
        {
            try
            {
                List<Director> list = await _context.Directors.ToListAsync();
                Response<List<Director>> response = new Response<List<Director>>
                {
                    IsSucces = true,
                    Message = "Lista obtenida con exito",
                    Result = list
                };
                return response;
            }
            catch (Exception ex)
            {
                return new Response<List<Director>>
                {
                    IsSucces= false,
                    Message = ex.Message,
                    
                };
            }
        }
    }
}
