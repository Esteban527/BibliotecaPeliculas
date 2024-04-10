using LibraryFilms.Web.Core;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

//namespace LibraryFilms.Web.Services
//{
//    public interface ISectionsService
//    {
//        public Task<Response<List<Section>>> GetListAsync();
        
        
//    }
//    public class SectionsService : ISectionsService
//    {
//        private readonly DataContext _context;

//        public SectionsService(DataContext context)
//        {
//            _context = context;
//        }
//        public async Task<Response<List<Section>>> GetListAsync()
//        {
//            try
//            {
//                List<Section> list = await _context.Sections.ToListAsync();

//                return new Response<List<Section>> 
//                { 
//                    IsSuccess = true,
//                    Message = "Secciones obtenidas con exito",
//                    Result = list
//                };
//                //return ResponseHelper<List<Section>>.MakeResponseSuccess(list, "Secciones obtenidas con éxito");
//            }
//            catch (Exception ex)
//            {
//                return new Response<List<Section>>
//                {
//                    IsSuccess = true,
//                    Message = ex.Message,
//                };
//                //return ResponseHelper<List<Section>>.MakeResponseFail(ex);
//            }
//        }
//    }
//}
