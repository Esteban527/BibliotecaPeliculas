<<<<<<< HEAD
using LibraryFilms.Web.Core.Pagination;
=======
﻿using LibraryFilms.Web.Core.Pagination;

>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
namespace LibraryFilms.Web.Core.Extensions
{
    public static class QueryableExtensions
    {
        public static IQueryable<T> Paginate<T>(this IQueryable<T> querable, PaginationRequest request)
        {
<<<<<<< HEAD
            return querable.Skip((request.Page - 1) * request.RecordsPerPage)
=======
            return querable.Skip((request.Page -1) * request.RecordsPerPage)
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
                           .Take(request.RecordsPerPage);
        }
    }
}
