using LibraryFilms.Web.Core;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Plugins;
using System.Collections.Generic;

namespace LibraryFilms.Web.Services
{
    public interface ISectionsService
    {
        public Task<Response<List<Section>>> GetListAsync();
    }

    public class SectionsService : ISectionsService
    {
        private readonly DataContext _context;

        public SectionsService(DataContext context)
        {
            _context = context;
        }

        public async Task<Response<List<Section>>> GetListAsync()
        {
            try
            {
                List<Section> list = await _context.Sections.ToListAsync();

                return new Response<List<Section>> 
                { 
                    IsSuccess = true,
                    Message = "Secciones obtenidas con éxito",
                    Result = list
                };

            }

            catch (Exception ex)
            {
                return new Response<List<Section>>
                {
                    IsSuccess = false,
                    Message = ex.Message,
                };
            }

            throw new NotImplementedException();
        }
    }
}
