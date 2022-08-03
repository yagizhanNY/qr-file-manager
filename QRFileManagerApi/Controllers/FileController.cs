using Contracts;
using Entities;
using Google.Apis.Storage.v1.Data;
using Google.Cloud.Storage.V1;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using QRFileManagerApi.Services;

namespace QRFileManagerApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("_myAllowSpecificOrigins")]
    public class FileController : Controller
    {
        IProjectFileRepository _projectFileRepository;

        StorageService _storageService;

        public FileController(IProjectFileRepository projectFileRepository)
        {
            _projectFileRepository = projectFileRepository;
            _storageService = new StorageService();
        }

        [HttpPost]
        public IActionResult AddFile([FromForm] IFormFile file, string bucketName = "qr-file-manager")
        {
            _storageService.UploadFile(file, bucketName);
            return Created(file.FileName, file.FileName);
        }

        [HttpGet]
        public IEnumerable<Google.Apis.Storage.v1.Data.Object> ListFiles(string bucketName = "qr-file-manager")
        {
            return _storageService.ListFiles(bucketName);
        }

        [HttpDelete]
        public IActionResult DeleteFile(string fileName, string bucketName = "qr-file-manager")
        {
            _storageService.DeleteFile(fileName, bucketName);
            return Ok(fileName);
        }
    }
}
