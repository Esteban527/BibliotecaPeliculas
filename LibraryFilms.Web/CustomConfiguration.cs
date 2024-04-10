using LibraryFilms.Web.Data;
//using LibraryFilms.Web.Services;
using Microsoft.EntityFrameworkCore;
using System;

//namespace LibraryFilms.Web
//{
//    public static class CustomConfiguration
//    {
//        public static WebApplicationBuilder AddCustomBuilderConfiguration(this WebApplicationBuilder builder)
//        {
//            // Data Context
//            builder.Services.AddDbContext<DataContext>(conf =>
//            {
//                conf.UseSqlServer(builder.Configuration.GetConnectionString("MyConnection"));
//            });

//            // Services
//            AddServices(builder);

//            return builder;
//        }

//        private static void AddServices(this WebApplicationBuilder builder)
//        {
//            // Services
//            builder.Services.AddScoped<ISectionsService, SectionsService>();
//            //builder.Services.AddTransient<SeedDb>();

//            // Helpers
//        }
//    }
//}
