import React from 'react';
import { Box, Typography } from '@mui/material';

const VisitorStats = ({ stats, onClose }) => {
  return (
    <Box
      onClick={onClose}
      sx={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        color: 'white',
        padding: '20px',
        borderRadius: '12px',
        border: '2px solid #4facfe',
        zIndex: 9999,
        minWidth: '280px',
        boxShadow: '0 8px 32px rgba(79, 172, 254, 0.3)',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4facfe', textAlign: 'center' }}>
          📊 Visitor Analytics
        </Typography>
        <Typography variant="body2" sx={{ color: '#ccc', fontSize: '0.7rem', textAlign: 'center' }}>
          (Click anywhere to close)
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
            Today's Visitors
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#00f2fe' }}>
            {stats.dailyCount}
          </Typography>
        </Box>
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#ccc', fontSize: '0.9rem' }}>
            Total Visitors
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#f093fb' }}>
            {stats.totalCount}
          </Typography>
        </Box>
        
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', pt: 1, mt: 1, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#aaa', fontSize: '0.7rem' }}>
            Updated: {stats.lastUpdated}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VisitorStats;