import json
import boto3
import base64
from botocore.exceptions import ClientError

def lambda_handler(event, context):
    try:
        
        s3_client = boto3.client('s3')
        

        file_content = event['file_content']  
        file_name = event['file_name']
        bucket_name = event['bucket_name']
        
        
        file_data = base64.b64decode(file_content)
        
        
        content_type = 'application/pdf'
        if not file_name.lower().endswith('.pdf'):
            content_type = 'application/octet-stream'
        
        
        s3_client.put_object(
            Bucket=bucket_name,
            Key=file_name,
            Body=file_data,
            ContentType=content_type
        )
        
        
        try:
            presigned_url = s3_client.generate_presigned_url(
                'get_object',
                Params={
                    'Bucket': bucket_name,
                    'Key': file_name
                },
                ExpiresIn=3600  
            )
        except ClientError:
            presigned_url = None
        
      
        response = {
            'statusCode': 200,
            'body': json.dumps({
                'message': f'Successfully uploaded {file_name} to {bucket_name}',
                'presigned_url': presigned_url
            })
        }
        
    except KeyError as e:
        response = {
            'statusCode': 400,
            'body': json.dumps({
                'error': 'Missing required parameters',
                'message': f'Please provide file_content, file_name, and bucket_name. Missing: {str(e)}'
            })
        }
    except ClientError as e:
        response = {
            'statusCode': 500,
            'body': json.dumps({
                'error': 'S3 operation failed',
                'message': str(e)
            })
        }
    except Exception as e:
        response = {
            'statusCode': 500,
            'body': json.dumps({
                'error': 'Internal server error',
                'message': str(e)
            })
        }
    
    return response