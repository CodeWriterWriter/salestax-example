exports.awsRoot = {
  type: 'blank-container'
};

exports.awsSg = {
  type: 'aws-sg',
  specific: {
    GroupName: 'awsSg',
    Description: 'Web security group',
    IpPermissions: [
      { 'IpProtocol': 'tcp', 'FromPort': 22, 'ToPort': 22, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] },
      { 'IpProtocol': 'tcp', 'FromPort': 1130, 'ToPort': 1130, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] },
      { 'IpProtocol': 'tcp', 'FromPort': 6379, 'ToPort': 6379, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] },
      { 'IpProtocol': 'tcp', 'FromPort': 9200, 'ToPort': 9200, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] },
      { 'IpProtocol': 'tcp', 'FromPort': 9300, 'ToPort': 9300, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] },
      { 'IpProtocol': 'tcp', 'FromPort': 8000, 'ToPort': 8000, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] }
    ],
    IpPermissionsEgress: [
      { IpProtocol: '-1', IpRanges: [ { 'CidrIp': '0.0.0.0/0' } ] } ],
    VpcId: 'vpc-bfbf79da',
    Tags: []
  }
};

exports.awsMachine = {
  type: 'aws-ami',
  name: 'awsMachine',
  specific: {
    ImageId: 'ami-4b90b27b'
  }
};

