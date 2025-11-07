const Community = () => {
  // Mock data for sub-communities
  const communities = [
    {
      id: 1,
      name: 'Web Development',
      description: 'Frontend, backend, and full-stack web development discussions',
      members: 1234,
      icon: '💻',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      name: 'Mobile Development',
      description: 'iOS, Android, and cross-platform mobile app development',
      members: 856,
      icon: '📱',
      color: 'from-green-400 to-green-600',
    },
    {
      id: 3,
      name: 'Data Science & AI',
      description: 'Machine learning, data analysis, and artificial intelligence',
      members: 2145,
      icon: '🤖',
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 4,
      name: 'DevOps & Cloud',
      description: 'Cloud infrastructure, CI/CD, and deployment strategies',
      members: 987,
      icon: '☁️',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      id: 5,
      name: 'UI/UX Design',
      description: 'User interface design, user experience, and design thinking',
      members: 1567,
      icon: '🎨',
      color: 'from-pink-400 to-pink-600',
    },
    {
      id: 6,
      name: 'Cybersecurity',
      description: 'Security practices, ethical hacking, and secure development',
      members: 743,
      icon: '🔒',
      color: 'from-red-400 to-red-600',
    },
    {
      id: 7,
      name: 'Blockchain',
      description: 'Cryptocurrency, smart contracts, and decentralized applications',
      members: 621,
      icon: '⛓️',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      id: 8,
      name: 'Game Development',
      description: 'Video game development, game engines, and interactive media',
      members: 892,
      icon: '🎮',
      color: 'from-indigo-400 to-indigo-600',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-slate-800">Our Communities</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Join specialized communities to connect with like-minded professionals and enthusiasts
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
          <div className="text-3xl font-bold text-blue-600">{communities.length}</div>
          <div className="text-slate-600 text-sm mt-1">Active Communities</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
          <div className="text-3xl font-bold text-purple-600">
            {communities.reduce((sum, c) => sum + c.members, 0).toLocaleString()}
          </div>
          <div className="text-slate-600 text-sm mt-1">Total Members</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
          <div className="text-3xl font-bold text-green-600">24/7</div>
          <div className="text-slate-600 text-sm mt-1">Active Discussions</div>
        </div>
      </div>

      {/* Communities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {communities.map((community) => (
          <div
            key={community.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 overflow-hidden group cursor-pointer"
          >
            {/* Header with gradient */}
            <div className={`h-24 bg-gradient-to-r ${community.color} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="absolute bottom-4 left-6 text-5xl transform group-hover:scale-110 transition-transform">
                {community.icon}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {community.name}
                </h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                  {community.description}
                </p>
              </div>

              {/* Members Count */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center text-sm text-slate-500">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {community.members.toLocaleString()} members
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Join →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Can't Find Your Community?</h2>
        <p className="mb-6 opacity-90">
          Start your own community and bring together people with similar interests
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-slate-50 transition-colors">
          Create Community
        </button>
      </div>
    </div>
  );
};

export default Community;
