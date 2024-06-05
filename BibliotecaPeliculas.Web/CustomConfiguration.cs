using AspNetCoreHero.ToastNotification;
using AspNetCoreHero.ToastNotification.Extensions;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Services;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web
{
    public static class CustomConfiguration
    {
        #region Builder
        public static WebApplicationBuilder AddCustomBuilderConfiguration(this WebApplicationBuilder builder)
        {
            //Data context
            builder.Services.AddDbContext<DataContext>(conf =>
            {
                conf.UseSqlServer(builder.Configuration.GetConnectionString("MyConnection"));
            });

            // Services
            AddServices(builder);

            // Toast
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
            // Services
            builder.Services.AddScoped<IDirectorsService, DirectorsService>();
            builder.Services.AddScoped<IFilmsService,FilmsService>();
            //Helpers
        }
        #endregion Builder

        #region App

        public static WebApplication AddCustomConfiguration(this WebApplication app)
        {
            app.UseNotyf();

            return app;
        }
        #endregion App
    }
}