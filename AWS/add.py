import json

def lambda_handler(event, context):
    try:
        
        num1 = float(event['num1'])
        num2 = float(event['num2'])
        
        
        result = num1 + num2
        
        
        response = {
            'statusCode': 200,
            'body': json.dumps({
                'result': result,
                'message': f'Successfully added {num1} and {num2}'
            })
        }
        
    except KeyError as e:
        response = {
            'statusCode': 400,
            'body': json.dumps({
                'error': 'Missing required parameters',
                'message': f'Please provide both num1 and num2. Missing: {str(e)}'
            })
        }
    except ValueError as e:
        response = {
            'statusCode': 400,
            'body': json.dumps({
                'error': 'Invalid number format',
                'message': 'Please provide valid numbers'
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