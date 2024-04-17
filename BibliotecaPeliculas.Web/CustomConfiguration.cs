using LibraryFilms.Web.Data;
using LibraryFilms.Web.Services;
using Microsoft.EntityFrameworkCore;

namespace LibraryFilms.Web
{
    public static class CustomConfiguration
    {
        public static WebApplicationBuilder AddCustomBuilderConfiguration(this WebApplicationBuilder builder) 
        {
            //Data Context
            builder.Services.AddDbContext<DataContext>(cfg =>
            {
                cfg.UseSqlServer(builder.Configuration.GetConnectionString("MyConnection"));
            });

            AddService(builder);

            return builder;
        }

        private static void AddService (this WebApplicationBuilder builder) 
        {
            //Services
            builder.Services.AddScoped<IPermissionsService, PermissionsService>();

            //Helpers
        }
    }
}
