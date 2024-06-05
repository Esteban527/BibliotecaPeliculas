using AspNetCoreHero.ToastNotification.Abstractions;
using Humanizer.Localisation;
using LibraryFilms.Web.Core;
using LibraryFilms.Web.Core.Pagination;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.DTOs;
using LibraryFilms.Web.Helpers;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Services
{
    public interface IFilmsService
    {
        public Task<Response<FilmDTO>> CreateAsync(FilmDTO dto);
        public Task<Response<List<Film>>> GetListAsync();
        public Task<Response<FilmDTO>> GetOneAsync(int id);
        public Task<Response<FilmDTO>> EditAsync(FilmDTO dto);
        public Task<Response<FilmDTO>> DeleteAsync(int id);
        public  Task<IEnumerable<SelectListItem>> GetDirectorsSelectListAsync();
    }

    public class FilmsService : IFilmsService
    {
        private readonly DataContext _context;
        private readonly INotyfService _notifyService;


        public FilmsService(DataContext context)
        {
            _context = context;
        }

        public async Task<Response<FilmDTO>> CreateAsync(FilmDTO dto)
        {
            try
            {
                var director = await _context.Directors.FindAsync(dto.DirectorId);
                if (director == null)
                {
                    return ResponseHelper<FilmDTO>.MakeResponseFail($"El director con id '{dto.DirectorId}' no existe.");
                }

                Film film = new Film
                {
                    Title = dto.Title,
                    Genre = dto.Genre,
                    PublishDate = dto.PublishDate,
                    DirectorId = dto.DirectorId,
                    Description = dto.Description,
                };

                await _context.Films.AddAsync(film);
                await _context.SaveChangesAsync();

                return ResponseHelper<FilmDTO>.MakeResponseSuccess(dto, "Película creada con éxito");
            }
            catch (Exception ex)
            {
                return ResponseHelper<FilmDTO>.MakeResponseFail(ex);
            };
        }
       
        public async Task<Response<List<Film>>> GetListAsync()
        {
            try
            {
                List<Film> list = await _context.Films
                                                .Include(f => f.Director)
                                                .ToListAsync();

                return ResponseHelper<List<Film>>.MakeResponseSuccess(list, "Lista obtenida con éxito");
            }
            catch (Exception ex)
            {
                return ResponseHelper<List<Film>>.MakeResponseFail(ex);
            }
        }

        public async Task<Response<FilmDTO>> GetOneAsync(int id)
        {
            try
            {
                Film film = await _context.Films
                                           .Include(f => f.Director)
                                           .FirstOrDefaultAsync(d => d.Id == id);

                if (film is null)
                {
                    return ResponseHelper<FilmDTO>.MakeResponseFail($"La película con id '{id}' no existe.");
                }

                FilmDTO dto = new FilmDTO
                {
                    Id = id,
                    Title = film.Title,
                    Genre = film.Genre,
                    PublishDate = film.PublishDate,
                    DirectorId = film.DirectorId,
                    Directors = await GetDirectorsSelectListAsync(),
                    Description = film.Description,
                };

                return ResponseHelper<FilmDTO>.MakeResponseSuccess(dto);
            }
            catch (Exception ex)
            {
                return ResponseHelper<FilmDTO>.MakeResponseFail(ex);
            }
        }

        public async Task<Response<FilmDTO>> EditAsync(FilmDTO dto)
        {
            try
            {
                var director = await _context.Directors.FindAsync(dto.DirectorId);
                if (director == null)
                {
                    return ResponseHelper<FilmDTO>.MakeResponseFail($"El director con id '{dto.DirectorId}' no existe.");
                }

                Film film = await _context.Films.FirstOrDefaultAsync(d => d.Id == dto.Id);

                if (film is null)
                {
                    return ResponseHelper<FilmDTO>.MakeResponseFail($"La película con id '{dto.Id}' no existe.");
                }
                film.Title = dto.Title;
                film.Genre = dto.Genre;
                film.PublishDate = dto.PublishDate;
                film.DirectorId = dto.DirectorId;
                film.Description = dto.Description;
                _context.Films.Update(film);
                await _context.SaveChangesAsync();

                return ResponseHelper<FilmDTO>.MakeResponseSuccess(dto, "Película editada con éxito");
            }
            catch (Exception ex)
            {
                return ResponseHelper<FilmDTO>.MakeResponseFail(ex);
            }
        }

        public async Task<Response<FilmDTO>> DeleteAsync(int id)
        {
            try
            {
                Film film = await _context.Films.FirstOrDefaultAsync(d => d.Id == id);

                if (film is null)
                {
                    return ResponseHelper<FilmDTO>.MakeResponseFail($"La película con id '{id}' no existe.");
                }

                _context.Films.Remove(film);
                await _context.SaveChangesAsync();

                return ResponseHelper<FilmDTO>.MakeResponseSuccess("Película eliminada con éxito");
            }
            catch (Exception ex)
            {
                return ResponseHelper<FilmDTO>.MakeResponseFail(ex);
            }
        }

        public async Task<IEnumerable<SelectListItem>> GetDirectorsSelectListAsync()
        {
            try
            {
                List<Director> directors = await _context.Directors.ToListAsync();

                return directors.Select(d => new SelectListItem
                {
                    Value = d.Id.ToString(),
                    Text = $"{d.FirstName} {d.LastName}"
                }).ToList();
            }
            catch (Exception ex)
            {
                _notifyService.Error(ex.Message);
                return Enumerable.Empty<SelectListItem>();
            }
        }
    }
}