namespace DatingApp.API.Helpers
{
    public class UserParams
    {
         private const int MaxPageSize = 50;
         //Gets default value of '1' so that it always returns first page unless specified otherwise
        public int PageNumber { get; set; } = 1;
        private int pageSize = 10;
        public int PageSize
        {
            get { return pageSize;}
             //Ternianry operation so that if your request page size greater than MaxPageSize it returns page size and if it's less it returns user's value
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value;}
        }

        public int UserId { get; set; }
        public string Gender { get; set; }
        public int MinAge { get; set; } = 18;
        public int MaxAge { get; set; } = 99;
        public string OrderBy { get; set; }
        public bool Likees { get; set; } = false;
        public bool Likers { get; set; } = false;
        
    }
}