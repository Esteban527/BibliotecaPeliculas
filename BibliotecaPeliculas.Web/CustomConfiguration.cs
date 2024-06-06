<<<<<<< HEAD
<<<<<<< HEAD
using AspNetCoreHero.ToastNotification;
using AspNetCoreHero.ToastNotification.Extensions;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Services;
=======
﻿using AspNetCoreHero.ToastNotification;
using AspNetCoreHero.ToastNotification.Extensions;
using Microsoft.AspNetCore.Identity;
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
=======
﻿using AspNetCoreHero.ToastNotification;
using AspNetCoreHero.ToastNotification.Extensions;
using Microsoft.AspNetCore.Identity;
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
using Microsoft.EntityFrameworkCore;
//using LibraryFilms.Core.Middlewares;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.Data.Seeders;
using LibraryFilms.Web.Services;
using LibraryFilms.Web.Helpers;


namespace LibraryFilms.Web
{
    public static class CustomConfiguration
    {
        #region Builder
<<<<<<< HEAD
<<<<<<< HEAD
        public static WebApplicationBuilder AddCustomBuilderConfiguration(this WebApplicationBuilder builder)
        {
            //Data context
=======
=======
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93

        public static WebApplicationBuilder AddCustomBuilderConfiguration(this WebApplicationBuilder builder)
        {
            //Data Context
<<<<<<< HEAD
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
=======
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
            builder.Services.AddDbContext<DataContext>(conf =>
            {
                conf.UseSqlServer(builder.Configuration.GetConnectionString("MyConnection"));
            });

<<<<<<< HEAD
<<<<<<< HEAD
            // Services
            AddServices(builder);

            // Toast
=======
=======
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
            builder.Services.AddHttpContextAccessor();

            //Services
            AddServices(builder);

            //Identity and Access Managnet
            AddIAM(builder);

            //Toast
<<<<<<< HEAD
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
=======
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
            builder.Services.AddNotyf(config =>
            {
                config.DurationInSeconds = 10;
                config.IsDismissable = true;
                config.Position = NotyfPosition.BottomRight;
            });

            return builder;


        }
        

<<<<<<< HEAD
        private static void AddServices(this WebApplicationBuilder builder)
        {
            // Services
            builder.Services.AddScoped<IDirectorsService, DirectorsService>();
            builder.Services.AddScoped<IFilmsService,FilmsService>();
            builder.Services.AddScoped<IPermissionsService, PermissionsService>();
=======
        private static void AddIAM(WebApplicationBuilder builder)
        {
            builder.Services.AddIdentity<User, IdentityRole>(x =>
            {
                x.User.RequireUniqueEmail = true;
                x.Password.RequireDigit = false;
                x.Password.RequiredUniqueChars = 0;
                x.Password.RequireLowercase = false;
                x.Password.RequireUppercase = false;
                x.Password.RequireNonAlphanumeric = false;
                x.Password.RequiredLength = 4;
            })
            .AddEntityFrameworkStores<DataContext>()
            .AddDefaultTokenProviders();

            builder.Services.ConfigureApplicationCookie(options =>
            {
                options.Cookie.Name = "Auth";
                options.LoginPath = "/Account/Login"; //Ruta de incio de sesión
                options.AccessDeniedPath = "/Account/NotAuthorized"; //Ruta de acceso denegado
            });

            builder.Services.AddAuthorization();
        }
        

<<<<<<< HEAD
=======
        private static void AddIAM(WebApplicationBuilder builder)
        {
            builder.Services.AddIdentity<User, IdentityRole>(x =>
            {
                x.User.RequireUniqueEmail = true;
                x.Password.RequireDigit = false;
                x.Password.RequiredUniqueChars = 0;
                x.Password.RequireLowercase = false;
                x.Password.RequireUppercase = false;
                x.Password.RequireNonAlphanumeric = false;
                x.Password.RequiredLength = 4;
            })
            .AddEntityFrameworkStores<DataContext>()
            .AddDefaultTokenProviders();

            builder.Services.ConfigureApplicationCookie(options =>
            {
                options.Cookie.Name = "Auth";
                options.LoginPath = "/Account/Login"; //Ruta de incio de sesión
                options.AccessDeniedPath = "/Account/NotAuthorized"; //Ruta de acceso denegado
            });

            builder.Services.AddAuthorization();
        }

>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
        private static void AddServices(this WebApplicationBuilder builder)
        {
            //Services
            builder.Services.AddScoped<ISectionsService, SectionsService>();
            builder.Services.AddTransient<SeedDb>();
            builder.Services.AddScoped<IUsersService, UsersService>();
<<<<<<< HEAD
=======

>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93


>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
            //Helpers
            builder.Services.AddScoped<IConverterHelper, ConverterHelper>();
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
=======

>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
        #endregion Builder

        #region App

        public static WebApplication AddCustomConfiguration(this WebApplication app)
        {
<<<<<<< HEAD
<<<<<<< HEAD
            app.UseNotyf();

            return app;
        }
=======
=======
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93

            app.UseNotyf();

            SeedData(app);

            return app;

        }

        private static void SeedData(WebApplication app)
        {
            IServiceScopeFactory scopedFactory = app.Services.GetService<IServiceScopeFactory>();

            using (IServiceScope scope = scopedFactory!.CreateScope())
            {
                SeedDb service = scope.ServiceProvider.GetService<SeedDb>();
                service!.SeedAsync().Wait();
            }
        }

<<<<<<< HEAD
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
=======
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
        #endregion App
    }
}