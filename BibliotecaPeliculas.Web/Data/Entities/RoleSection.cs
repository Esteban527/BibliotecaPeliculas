namespace LibraryFilms.Web.Data.Entities
{
    public class RoleSection
    {
        public int RoleId { get; set; }

        public LibraryFilmsRole Role { get; set; }

        public int SectionId { get; set; }

        public Section Section { get; set; }
    }
}
