using LibraryFilms.Web.Core;
using LibraryFilms.Web.Core.Pagination;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.Helpers;
using LibraryFilms.Web.Requests;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Plugins;
using System.Collections.Generic;


namespace LibraryFilms.Web.Services
{
    public interface IActorsService
    {
        public Task<Response<Actor>> CreateAsync(Actor model);
        public Task<Response<PaginationResponse<Actor>>> GetListAsync(PaginationRequest request);
        public Task<Response<Actor>> GetOneAsync(int id);
        public Task<Response<Actor>> EditAsync(Actor model);
        public Task<Response<Actor>> DeleteAsync(int id);
        public Task<Response<Actor>> ToggleSectionAsync(ToggleSectionRequest request);
    }

    public class ActorsService : IActorsService
    {
        private readonly DataContext _context;

        public ActorsService(DataContext context)
        {
            _context = context;
        }

        public async Task<Response<Actor>> CreateAsync(Actor model)
        {
            try
            {
                Actor actor = new Actor
                {
                    FirstName = model.FirstName,
                };

                await _context.AddAsync(actor);
                await _context.SaveChangesAsync();

                return ResponseHelper<Actor>.MakeResponseSuccess(actor, "Actor creado con éxito");
            }
            catch (Exception ex)
            {
                return ResponseHelper<Actor>.MakeResponseFail(ex);
            }
        }

        /*public Task<Response<Actor>> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Response<Actor>> EditAsync(Actor model)
        {
            throw new NotImplementedException();
        }*/

        public async Task<Response<PaginationResponse<Actor>>> GetListAsync(PaginationRequest request)
        {
            try
            {
                IQueryable<Actor> queryable = _context.Actors.AsQueryable();

                if (!string.IsNullOrWhiteSpace(request.Filter))
                {
                    queryable = queryable.Where(a => a.FirstName.ToLower().Contains(request.Filter.ToLower()));
                }

                PagedList<Actor> list = await PagedList<Actor>.ToPagedListAsync(queryable, request);

                PaginationResponse<Actor> result = new PaginationResponse<Actor>
                {
                    List = list,
                    TotalCount = list.TotalCount,
                    RecordsPerPage = list.RecordsPerPage,
                    CurrentPage = list.CurrentPage,
                    TotalPages = list.TotalPages,

                    Filter = request.Filter,

                };

                return ResponseHelper<PaginationResponse<Actor>>.MakeResponseSuccess(result, "Actores obtenidos con éxito");

            }
            catch (Exception ex)
            {
                return ResponseHelper<PaginationResponse<Actor>>.MakeResponseFail(ex);
            }
        }

        public async Task<Response<Actor>> EditAsync(Actor model)
        {
            try
            {
                _context.Actors.Update(model);
                await _context.SaveChangesAsync();

                return ResponseHelper<Actor>.MakeResponseSuccess(model, "Actor editado con éxito");
            }
            catch (Exception ex)
            {
                return ResponseHelper<Actor>.MakeResponseFail(ex);
            }
        }

        public async Task<Response<Actor>> DeleteAsync(int id)
        {
            try
            {
                Actor? actor = await _context.Actors.FirstOrDefaultAsync(a => a.Id == id);

                if (actor is null)
                {
                    return ResponseHelper<Actor>.MakeResponseFail($"El actor con id '{id}' no existe.");
                }
                _context.Actors.Remove(actor);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return ResponseHelper<Actor>.MakeResponseFail(ex) ;
            }
        }

        public async Task<Response<Actor>> ToggleSectionAsync(ToggleSectionRequest request)
        {
            try
            {
                Actor? model = await _context.Actors.FindAsync(request.Id);

                if (model == null)
                {
                    return ResponseHelper<Actor>.MakeResponseFail($"No existe un actor con id '{request.Id}'");
                }

                model.IsHidden = request.Hide;

                _context.Actors.Update(model);
                await _context.SaveChangesAsync();

                return ResponseHelper<Actor>.MakeResponseSuccess("Actor actualizado con éxito");
            }
            catch (Exception ex)
            {
                return ResponseHelper<Actor>.MakeResponseFail(ex);
            }
        }

        public Task<Response<Actor>> GetOneAsync(int id)
        {
            throw new NotImplementedException();
        }

        /*public Task<Response<Actor>> ToggleSectionAsync(ToggleSectionRequest request)
        {
            throw new NotImplementedException();
        }*/

    }
}