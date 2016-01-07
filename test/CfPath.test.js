var fs = require('fs');
var reader = require('../index.js');
var tape = require('tape');

tape('CfPath', function(assert) {
    var data = [];
    var cfPath = reader.CfPath();
    cfPath.on('data', function(d) {
        data.push(d);
    });
    cfPath.on('end', function() {
        assert.equal(data[0], '/a.json?option=1');
        assert.equal(data.length, 1);
        assert.end();
    });
    cfPath.write('2014-09-05	12:48:00	IAD53	33125	54.236.254.12	GET	d3eju24r2ptc5d.cloudfront.net	/a.json	200	https://www.mapbox.com/	FakeAgent	option=1	-	Miss	FAKE==	example.com	http	784	0.314\n');
    cfPath.write('\n');
    cfPath.end();
});
