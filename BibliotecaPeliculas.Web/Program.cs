using AspNetCoreHero.ToastNotification;
<<<<<<< HEAD
<<<<<<< HEAD
using AspNetCoreHero.ToastNotification.Extensions;
=======
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
=======
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
using LibraryFilms.Web;
using LibraryFilms.Web.Data;
using LibraryFilms.Web.Services;
using Microsoft.EntityFrameworkCore;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.AddCustomBuilderConfiguration();

<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
=======
>>>>>>> 0641eec8b871546eb8cb60b6758f909ba7f46f93
WebApplication app = builder.Build();


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts(); 
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseRouting();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Dashboard}/{id?}");

app.AddCustomConfiguration();

app.Run();
