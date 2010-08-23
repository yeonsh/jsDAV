var jsDAV       = require("./../jsdav"),
    jsDAV_iNode = require("./iNode").jsDAV_iNode;

/**
 * Implement this class to support locking
 */
function jsDAV_iLockable() {}

exports.jsDAV_iLockable = jsDAV_iLockable;
    this.REGBASE = this.REGBASE | jsDAV.__ILOCKABLE__;

    /**
     * Returns an array with locks currently on the node
     *
     * @return jsDAV_Locks_LockInfo[]
     */
    this.getLocks = function() {};

    /**
     * Creates a new lock on the file.
     *
     * @param {jsDAV_Locks_LockInfo} lockInfo The lock information
     * @return void
     */
    this.lock = function(lockInfo) {};

    /**
     * Unlocks a file
     *
     * @param {jsDAV_Locks_LockInfo} lockInfo The lock information
     * @return void
     */
    this.unlock = function(lockInfo) {};
(function() {

}).call(jsDAV_iLockable.prototype = new jsDAV_iNode());