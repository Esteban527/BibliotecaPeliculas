<<<<<<< HEAD
using LibraryFilms.Web.Core.Extensions;
=======
﻿using LibraryFilms.Web.Core.Extensions;
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web.Core.Pagination
{
    public class PagedList<T> : List<T>
    {
        public int CurrentPage { get; private set; }

        public int TotalPages { get; private set; }

        public int RecordsPerPage { get; private set; }

        public int TotalCount { get; private set; }

        public PagedList(List<T> items, int count, int pageNumber, int recordsPerPage) 
        { 
            TotalCount = count;
            RecordsPerPage = recordsPerPage;
            CurrentPage = pageNumber;
            TotalPages = (int)Math.Ceiling(count / (double)recordsPerPage);
            AddRange(items);
        }

        public static async Task<PagedList<T>> ToPagedListAsync(IQueryable<T> source, PaginationRequest request) 
        { 
            List<T> items = await source.Paginate<T>(request).ToListAsync();

            int count = await source.CountAsync();

            return new PagedList<T>(items, count, request.Page, request.RecordsPerPage);
        }
    }
}
