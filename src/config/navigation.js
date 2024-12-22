export const sidebarNavigation = {
  main: [
    { 
      name: 'Dashboard', 
      icon: 'home',
      path: '/dashboard'
    },
    { 
      name: 'Entities', 
      icon: 'briefcase',
      children: [
        { name: 'All Entities', path: '/entities' },
        { name: 'Entity Types', path: '/entities/types' },
        { name: 'Entity Projects', path: '/entities/projects' }
      ]
    },
    { 
      name: 'Indicators', 
      icon: 'target',
      children: [
        { name: 'All Indicators', path: '/indicators' },
        { name: 'Categories', path: '/indicators/categories' },
        { name: 'Frameworks', path: '/indicators/frameworks' },
        { name: 'Targets & Baselines', path: '/indicators/targets' }
      ]
    }
  ],
  reporting: [
    {
      name: 'Reports',
      icon: 'file-text',
      children: [
        { name: 'Active Reports', path: '/reports/active' },
        { name: 'Submitted Reports', path: '/reports/submitted' },
        { name: 'Pending Approval', path: '/reports/pending', count: 12 },
        { name: 'Report History', path: '/reports/history' }
      ]
    },
    {
      name: 'Analytics',
      icon: 'bar-chart-2',
      children: [
        { name: 'Performance Overview', path: '/analytics/overview' },
        { name: 'Entity Analysis', path: '/analytics/entities' },
        { name: 'Indicator Trends', path: '/analytics/trends' },
        { name: 'Custom Reports', path: '/analytics/custom' }
      ]
    },
    {
      name: 'Timelines',
      icon: 'calendar',
      children: [
        { name: 'Active Cycles', path: '/timelines/active' },
        { name: 'Schedule', path: '/timelines/schedule' },
        { name: 'Timeline History', path: '/timelines/history' }
      ]
    }
  ],
  bottom: [
    {
      name: 'Administration',
      icon: 'settings',
      children: [
        { name: 'User Management', path: '/admin/users' },
        { name: 'Roles & Permissions', path: '/admin/roles' },
        { name: 'System Settings', path: '/admin/settings' },
        { name: 'Audit Logs', path: '/admin/audit' }
      ]
    },
    { 
      name: 'Help & Support', 
      icon: 'help-circle',
      children: [
        { name: 'Documentation', path: '/help/docs' },
        { name: 'User Guide', path: '/help/guide' },
        { name: 'FAQs', path: '/help/faqs' },
        { name: 'Contact Support', path: '/help/support' }
      ]
    }
  ]
}