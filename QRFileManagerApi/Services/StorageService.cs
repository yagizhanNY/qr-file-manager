using Google.Cloud.Storage.V1;

namespace QRFileManagerApi.Services
{
    public class StorageService
    {
        public void UploadFile(IFormFile file, string bucketName)
        {
            string objectBlobName = $"{file.FileName}";

            var gcsStorage = StorageClient.Create();

            using var memoryStream = new MemoryStream();
            file.CopyTo(memoryStream);

            gcsStorage.UploadObject(bucketName, objectBlobName, "application/pdf", memoryStream);
        }

        public IEnumerable<Google.Apis.Storage.v1.Data.Object> ListFiles(string bucketName)
        {
            var storage = StorageClient.Create();
            var storageObjects = storage.ListObjects(bucketName);

            return storageObjects;
        }

        public void DeleteFile(string fileName, string bucketName)
        {

            var gcsStorage = StorageClient.Create();
            var fileObject = gcsStorage.GetObject(bucketName, fileName);

            if(fileObject != null)
            {
                gcsStorage.DeleteObject(fileObject);
            }
        }
    }
}
