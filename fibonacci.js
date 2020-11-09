function fibonacci(n) {
	var t1 = 0, t2 = 1, nt;
	if (n == 0) {
		nt = '0';
	}
	if (n == 1) {
		nt = '1';
	}
	for (var i = 2; i < n; i++) {
		nt = t1 + t2;
		t1 = t2;
		t2 = nt;
	}
	return nt;
}

module.exports = {
	fibonacci
};