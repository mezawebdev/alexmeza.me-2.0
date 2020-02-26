const Injector = {
    init() {
        Array.prototype.last = function() {
            return this[this.length - 1];
        }

        Array.prototype.first = function() {
            return this[0];
        }

        Array.prototype.sliceFirst = function() {
            this.slice(0, 1);
        }

        Array.prototype.isInArray = function(item) {
            for (let i = 0; i < this.length; i++) {
                if (item === this[i]) {
                    return true;
                }
            }

            return false;
        }

        Array.prototype.sliceLast = function() {
            this.slice[this.length - 1, 1];
        }
    }
}

export default Injector;