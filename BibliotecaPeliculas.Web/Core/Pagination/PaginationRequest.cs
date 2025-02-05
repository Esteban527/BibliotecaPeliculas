<<<<<<< HEAD
namespace LibraryFilms.Web.Core.Pagination
=======
﻿namespace LibraryFilms.Web.Core.Pagination
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
{
    public class PaginationRequest
    {
        private int _page = 1;
        private int _recordsPerPage = 15;
        private int _maxRecordsPerPage = 50;

        public string? Filter { get; set; }
        public int Page 
        { 
            get => _page;

            set => _page = value > 0 ? value : _page;
        }

        public int RecordsPerPage
        {
            get => _recordsPerPage;

            set => _recordsPerPage = value <= _maxRecordsPerPage ? value : _maxRecordsPerPage;
        }
    }
}