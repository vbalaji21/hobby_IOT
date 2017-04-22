#!/usr/bin/env python
import urllib2,json
READ_API_KEY='Q3R57JDMK9XLYR74'
CHANNEL_ID=239335

#http://api.thingspeak.com/channels/%s/feeds/last.json?api_key=%s
def main():
    conn = urllib2.urlopen("http://api.thingspeak.com/channels/%s/feeds/last.json?api_key=%s" \
                           % (CHANNEL_ID,READ_API_KEY))

    response = conn.read()
    print "http status code=%s" % (conn.getcode())
    data=json.loads(response)
    print "Server Response : ", data
    print "field1 : ", data['field1']
    print "field2 : ", data['field2']
    print "field3 : ", data['field3']
    print "field4 : ", data['field4']
    print "Date of creation : ", data['created_at']
    conn.close()

if __name__ == '__main__':
    main()
