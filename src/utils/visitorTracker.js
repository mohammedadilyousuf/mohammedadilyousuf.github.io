// Visitor tracking utility for portfolio analytics
class VisitorTracker {
  constructor() {
    this.storageKeys = {
      daily: 'portfolio_daily_visitors',
      total: 'portfolio_total_visitors',
      deviceId: 'portfolio_device_id',
      lastVisit: 'portfolio_last_visit'
    };
    this.initializeTracking();
  }

  // Generate a unique device fingerprint
  generateDeviceFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Device fingerprint', 2, 2);
    
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width,
      screen.height,
      screen.colorDepth,
      new Date().getTimezoneOffset(),
      canvas.toDataURL()
    ].join('|');
    
    return btoa(fingerprint).slice(0, 32);
  }

  // Get or create device ID
  getDeviceId() {
    let deviceId = localStorage.getItem(this.storageKeys.deviceId);
    if (!deviceId) {
      deviceId = this.generateDeviceFingerprint();
      localStorage.setItem(this.storageKeys.deviceId, deviceId);
    }
    return deviceId;
  }

  // Check if it's a new day
  isNewDay(lastVisitDate) {
    const today = new Date().toDateString();
    return !lastVisitDate || new Date(lastVisitDate).toDateString() !== today;
  }

  // Initialize tracking and record visit
  initializeTracking() {
    try {
      const deviceId = this.getDeviceId();
      const now = new Date().toISOString();
      const lastVisit = localStorage.getItem(this.storageKeys.lastVisit);
      
      // Get current stats
      let dailyVisitors = JSON.parse(localStorage.getItem(this.storageKeys.daily) || '{}');
      let totalVisitors = JSON.parse(localStorage.getItem(this.storageKeys.total) || '{}');
      
      // Check if it's a new day - reset daily counter
      if (this.isNewDay(lastVisit)) {
        dailyVisitors = {};
      }
      
      // Record visit if device hasn't visited today
      if (!dailyVisitors[deviceId]) {
        dailyVisitors[deviceId] = now;
        localStorage.setItem(this.storageKeys.daily, JSON.stringify(dailyVisitors));
      }
      
      // Record total visit if device is new
      if (!totalVisitors[deviceId]) {
        totalVisitors[deviceId] = now;
        localStorage.setItem(this.storageKeys.total, JSON.stringify(totalVisitors));
      }
      
      // Update last visit
      localStorage.setItem(this.storageKeys.lastVisit, now);
      
    } catch (error) {
      console.error('Visitor tracking failed:', error);
    }
  }

  // Get visitor statistics
  getStats() {
    try {
      const dailyVisitors = JSON.parse(localStorage.getItem(this.storageKeys.daily) || '{}');
      const totalVisitors = JSON.parse(localStorage.getItem(this.storageKeys.total) || '{}');
      const lastVisit = localStorage.getItem(this.storageKeys.lastVisit);
      
      return {
        dailyCount: Object.keys(dailyVisitors).length,
        totalCount: Object.keys(totalVisitors).length,
        lastUpdated: lastVisit ? new Date(lastVisit).toLocaleString() : 'Never',
        currentDeviceId: this.getDeviceId().slice(0, 8) + '...'
      };
    } catch (error) {
      console.error('Failed to get stats:', error);
      return {
        dailyCount: 0,
        totalCount: 0,
        lastUpdated: 'Error',
        currentDeviceId: 'Unknown'
      };
    }
  }
}

export default VisitorTracker;