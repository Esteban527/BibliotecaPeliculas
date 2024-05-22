﻿using LibraryFilms.Web.Data.Entities;
using LibraryFilms.Web.DTOs;

namespace LibraryFilms.Web.Helpers
{
    public interface IConverterHelper
    {
        public AccountUserDTO ToAccountDTO(User user);
    }

    public class ConverterHelper : IConverterHelper
    {
        public AccountUserDTO ToAccountDTO(User user)
        {
            return new AccountUserDTO
            {
                Id = Guid.Parse(user.Id),
                Document = user.Document,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                PhoneNumber = user.PhoneNumber,

            };
        }
    }
}
