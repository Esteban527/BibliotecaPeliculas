using Humanizer;
using LibraryFilms.Web.Core;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.DTOs;
using LibraryFilms.Web.Helpers;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace LibraryFilms.Web.Services
{
    public interface IDirectorsService
    {
        public Task<Response<DirectorDTO>> CreateAsync(DirectorDTO dto);
        public Task<Response<List<Director>>> GetListAsyc();
        public Task<Response<DirectorDTO>> GetOneAsync(int id);

        public Task<Response<DirectorDTO>> EditAsync(DirectorDTO dto);

        public Task<Response<DirectorDTO>> DeleteAsync(int id);
    }

    public class DirectorsService : IDirectorsService
    {
        private readonly DataContext _context;

        public DirectorsService(DataContext context)
        {
            _context = context;
        }

        public async Task<Response<DirectorDTO>> CreateAsync(DirectorDTO dto)
        {
            try
            {
                Director director = new Director
                {
                    FirstName = dto.FirstName,
                    LastName = dto.LastName,
                    Description = dto.Description
                };

                await _context.Directors.AddAsync(director);
                await _context.SaveChangesAsync();

                return ResponseHelper<DirectorDTO>.MakeResponseSuccess(dto, "Director creado con éxito");

            }
            catch (Exception ex)
            {
                return ResponseHelper<DirectorDTO>.MakeResponseFail(ex);
            }
        }

        public async Task<Response<List<Director>>> GetListAsyc()
        {
            try
            {
                List<Director> list = await _context.Directors.ToListAsync();

                return ResponseHelper<List<Director>>.MakeResponseSuccess(list, "Lista obtenida con exito");

            }
            catch (Exception ex)
            {
                return ResponseHelper<List<Director>>.MakeResponseFail(ex);
            }
        }

        public async Task<Response<DirectorDTO>> GetOneAsync(int id)
        {
            try
            {
                Director director = await _context.Directors.FirstOrDefaultAsync(d => d.Id == id);

                if (director is null)
                {
                    return ResponseHelper<DirectorDTO>.MakeResponseFail($"El director con id '{id}' no existe.");
                }
                DirectorDTO dto = new DirectorDTO
                {
                    Id = id,
                    FirstName = director.FirstName,
                    LastName = director.LastName,
                    Description = director.Description,
                };

                return ResponseHelper<DirectorDTO>.MakeResponseSuccess(dto);
            }
            catch (Exception ex)
            {
                return ResponseHelper<DirectorDTO>.MakeResponseFail(ex);
            }
        }

        public async Task<Response<DirectorDTO>> EditAsync(DirectorDTO dto)
        {
            try
            {
                Director director = await _context.Directors.FirstOrDefaultAsync(d => d.Id == dto.Id);

                if (director is null)
                {
                    return ResponseHelper<DirectorDTO>.MakeResponseFail($"El director con id '{dto.Id}' no existe.");
                }
                director.FirstName = dto.FirstName;
                director.LastName = dto.LastName;
                director.Description = dto.Description;
                _context.Directors.Update(director);
                await _context.SaveChangesAsync();

                return ResponseHelper<DirectorDTO>.MakeResponseSuccess(dto, "Director editado con éxito");
            }
            catch (Exception ex)
            {
                return ResponseHelper<DirectorDTO>.MakeResponseFail(ex);
            }
        }

        public async Task<Response<DirectorDTO>> DeleteAsync(int id)
        {
            try
            {
                Director director = await _context.Directors.FirstOrDefaultAsync(d => d.Id == id);

                if (director is null)
                {
                    return ResponseHelper<DirectorDTO>.MakeResponseFail($"La sección con id '{id}' no existe.");
                }

                _context.Directors.Remove(director);
                await _context.SaveChangesAsync();

                return ResponseHelper<DirectorDTO>.MakeResponseSuccess("Sección eliminada con éxito");
            }
            catch (Exception ex)
            {
                return ResponseHelper<DirectorDTO>.MakeResponseFail(ex);
            }
        }
    }
}
