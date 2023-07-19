using System.ComponentModel.DataAnnotations;

namespace PruebaBackBG.Models
{
    public class Plan
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string Nombre { get; set; }

        [Required]
        public string Icono { get; set; }

        [Required]
        public string Descripcion { get; set; }

        [Required]
        public decimal Valor { get; set; }

        public string Frecuencia { get; set; }

        [Required]
        public string Codigo { get; set; }

        [Required]
        public List<Product> ProductosPlan { get; set; }
    }
}
