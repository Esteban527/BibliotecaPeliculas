using LibraryFilms.Web.Core;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.DTOs;
using LibraryFilms.Web.Helpers;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Services
{
    public interface IFilmsService
    {
        public Task<Response<FilmDTO>> CreateAsync(FilmDTO dto);
        public Task<Response<List<Film>>> GetListAsyc();
    }

    public class FilmsService : IFilmsService
    {
        private readonly DataContext _context;

        public FilmsService(DataContext context)
        {
            _context = context;
        }

        public async Task<Response<FilmDTO>> CreateAsync(FilmDTO dto)
        {
            try
            {
                Film film = new Film
                {
                    Title = dto.Title,
                    Genre = dto.Genre,
                    PublishDate = dto.PublishDate,
                    Director = dto.Director,
                    Description = dto.Description,

                };

                await _context.Films.AddAsync(film);
                await _context.SaveChangesAsync();

                return ResponseHelper<FilmDTO>.MakeResponseSuccess(dto, "Pelicula creada con éxito");

            }
            catch (Exception ex)
            {
                return ResponseHelper<FilmDTO>.MakeResponseFail(ex);
            };
        }

        public async Task<Response<List<Film>>> GetListAsyc()
        {
            try
            {
                List<Film> list = await _context.Films.ToListAsync();

                return ResponseHelper<List<Film>>.MakeResponseSuccess(list, "Lista obtenida con exito");
            }
            catch (Exception ex)
            {
                return ResponseHelper<List<Film>>.MakeResponseFail(ex);
            }
        }



    }
}
