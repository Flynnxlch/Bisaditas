"use client";

import ThemeToggle from '@/components/ThemeToggle';

export default function SettingsContent() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2 theme-transition" style={{color: 'var(--text-primary)'}}>Settings</h1>
        <p className="theme-transition" style={{color: 'var(--text-secondary)'}}>Manage your account settings and preferences</p>
      </div>

      {/* Appearance Section */}
      <div className="rounded-2xl p-6 mb-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Appearance</h3>
            <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Choose your preferred theme</p>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Other Settings Sections */}
      <div className="space-y-6">
        {/* Account Settings */}
        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <h3 className="text-lg font-semibold mb-4 theme-transition" style={{color: 'var(--text-primary)'}}>Account Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium theme-transition" style={{color: 'var(--text-primary)'}}>Profile Information</div>
                <div className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Update your personal details</div>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                Edit
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium theme-transition" style={{color: 'var(--text-primary)'}}>Change Password</div>
                <div className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Update your password</div>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                Change
              </button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <h3 className="text-lg font-semibold mb-4 theme-transition" style={{color: 'var(--text-primary)'}}>Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium theme-transition" style={{color: 'var(--text-primary)'}}>Email Notifications</div>
                <div className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Receive updates via email</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium theme-transition" style={{color: 'var(--text-primary)'}}>Push Notifications</div>
                <div className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Receive push notifications</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}></div>
              </label>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <h3 className="text-lg font-semibold mb-4 theme-transition" style={{color: 'var(--text-primary)'}}>Privacy</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium theme-transition" style={{color: 'var(--text-primary)'}}>Profile Visibility</div>
                <div className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Control who can see your profile</div>
              </div>
              <select className="px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 theme-transition" 
                      style={{
                        borderColor: 'var(--border-color)',
                        backgroundColor: 'var(--card-bg)',
                        color: 'var(--text-primary)',
                        borderWidth: '1px'
                      }}>
                <option>Public</option>
                <option>Friends Only</option>
                <option>Private</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
