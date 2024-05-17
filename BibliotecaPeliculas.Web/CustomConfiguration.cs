using AspNetCoreHero.ToastNotification;
using AspNetCoreHero.ToastNotification.Extensions;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.Data.Seeders;

using LibraryFilms.Web.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;

namespace LibraryFilms.Web
{
    public static class CustomConfiguration
    {
        #region Builder
        public static WebApplicationBuilder AddCustomBuilderConfiguration(this WebApplicationBuilder builder)
        {
            //Data Context
            builder.Services.AddDbContext<DataContext>(conf =>
            {
                conf.UseSqlServer(builder.Configuration.GetConnectionString("MyConnection"));
            });

            //Services
            AddServices(builder);

            //Identity and Access Managnet
            AddIAM(builder);

            //Toast
            builder.Services.AddNotyf(config =>
            {
                config.DurationInSeconds = 10;
                config.IsDismissable = true;
                config.Position = NotyfPosition.BottomRight;
            });

            return builder;
        }


        private static void AddServices(this WebApplicationBuilder builder) 
        {
            //Services
            builder.Services.AddScoped<ISectionsService, SectionsService>();

            //Helpers
        }

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
                options.LoginPath = "Account/Login"; //Ruta de incio de sesión
                options.AccessDeniedPath = "Account/NotAuthorized"; //Ruta de acceso denegado
            });

            builder.Services.AddAuthorization();
        }

        private static void AddService(this WebApplicationBuilder builder)
        {
            //Services
            builder.Services.AddScoped<ISectionsService, SectionsService>();
            //builder.Services.AddScoped<IRolesServices, RolesServices>();
            builder.Services.AddScoped<IUsersService, UsersService>();
            builder.Services.AddTransient<SeedDB>();

            //Helpers
        }

        #endregion

        #region App

        public static WebApplication AddCustomConfiguration(this WebApplication app)
        {

            app.UseNotyf();

            return app;

        }

        #endregion
    }
}
