using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using KendoUIWeb.Models;

namespace KendoUIWeb.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        #region Ajax資料處理

        public JsonResult Get_Books([DataSourceRequest] DataSourceRequest request)
        {
            List<Book> data = new List<Book>();
            var dataCount = 25;

            for (int i = 1; i <= dataCount; i++)
            {
                var book = new Book();
                book.BookId = i;
                book.BookName = $"TEST-{i}";
                book.BookPrice = i * 10;
                data.Add(book);
            }

            return Json(data.ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }

        #endregion Ajax資料處理
    }
}