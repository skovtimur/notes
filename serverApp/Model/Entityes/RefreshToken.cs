using System.ComponentModel.DataAnnotations;

namespace FullstackApp1.Model.Entityes;

public class RefreshToken
{
    [Required]
    public Guid UserId { get; set; }

    [Required]
    public string Token { get; set; }
}