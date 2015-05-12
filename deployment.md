

# Ports:

   * salestax-api:     51000
   * salestax-basic:   51001
   * salestax-country: 51002
   * salestax-proxy:   51003
   * salestax-ie:      51004


# Steps:

   * 1.0: salestax-api:v0 ping
   * 1.1: salestax-api:v1 ping docker

   * salestax-basic:v0 process
   * salestax-basic:v1 docker

   * salestax-api:v2a basic connect
   * salestax-api:v2a basic connect docker

   * nscale api:v2a basic:v1
   * nscale api,basic process
   * nscale api,basic docker

   * salestax-monitor:v0 process direct
   * salestax-monitor:v1 process queue

   * salestax-basic:v1+v2 
   * nscale basic v1+v2

   * salestax-country:v0 direct
   * salestax-country:v1 queue
   * salestax-monitor:v2 country

   * salestax-proxy:v0 queue

   * salestax-api:v4 proxy

   * salestax-monitor:v3 urls
   * salestax-country:v1 queue







influxdb -config=/usr/local/etc/influxdb.conf

http://localhost:8083/
root/root


192.168.59.103


docker run -d -p 11300:11300 schickling/beanstalkd

