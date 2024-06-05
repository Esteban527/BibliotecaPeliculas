using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.DTOs;

namespace LibraryFilms.Web.Helpers
{
    public interface IConverterHelper
    {
        public ActorDTO ActorDTO(Actor actor);
    }

    public class ConverterHelper : IConverterHelper
    {
        public ActorDTO ActorDTO(Actor actor)
        {
            return new ActorDTO
            {
                Id = Guid.Parse(actor.Id),
                FirstName = actor.FirstName,
                LastName = actor.LastName,
                Description = actor.Description,
            };
        }
    }
}
