using System.Net;

namespace PruebaBackBG.Helpers
{
    public class ApiResponse<T>
    {
        public HttpStatusCode StatusCode { get; set; }
        public string Message { get; set; }
        public T Data { get; set; }
        public string? Token { get; set; }
    }
}
