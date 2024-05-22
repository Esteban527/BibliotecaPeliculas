namespace LibraryFilms.Web.Data.Entities
{
    public class RolePermission
    {
        public int RoleId { get; set; }

        public LibraryFilmsRole Role { get; set; }

        public int PermissionId { get; set; }

        public Permission Permission { get; set; }
    }
}
