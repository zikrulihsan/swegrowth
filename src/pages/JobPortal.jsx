import { useState } from 'react';

const JobPortal = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock job data
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $150k',
      posted: '2 days ago',
      description: 'We are looking for an experienced frontend developer with strong React skills.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      logo: '🏢',
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      company: 'CloudScale',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130k - $160k',
      posted: '1 week ago',
      description: 'Join our team to build and maintain cloud infrastructure.',
      tags: ['AWS', 'Kubernetes', 'Docker'],
      logo: '☁️',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'DesignStudio',
      location: 'New York, NY',
      type: 'Contract',
      salary: '$90k - $110k',
      posted: '3 days ago',
      description: 'Create beautiful and intuitive user interfaces for our products.',
      tags: ['Figma', 'UI Design', 'Prototyping'],
      logo: '🎨',
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'AI Labs',
      location: 'Remote',
      type: 'Full-time',
      salary: '$140k - $180k',
      posted: '1 day ago',
      description: 'Work on cutting-edge machine learning projects.',
      tags: ['Python', 'TensorFlow', 'ML'],
      logo: '🤖',
    },
    {
      id: 5,
      title: 'Backend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      type: 'Part-time',
      salary: '$100k - $130k',
      posted: '5 days ago',
      description: 'Build scalable backend services using Node.js and PostgreSQL.',
      tags: ['Node.js', 'PostgreSQL', 'API'],
      logo: '⚡',
    },
    {
      id: 6,
      title: 'Mobile Developer',
      company: 'AppBuilders',
      location: 'Remote',
      type: 'Full-time',
      salary: '$115k - $145k',
      posted: '4 days ago',
      description: 'Develop cross-platform mobile applications using React Native.',
      tags: ['React Native', 'iOS', 'Android'],
      logo: '📱',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Jobs', count: jobs.length },
    { id: 'full-time', label: 'Full-time', count: jobs.filter(j => j.type === 'Full-time').length },
    { id: 'remote', label: 'Remote', count: jobs.filter(j => j.location === 'Remote').length },
    { id: 'contract', label: 'Contract', count: jobs.filter(j => j.type === 'Contract').length },
  ];

  const filteredJobs = jobs.filter(job => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'full-time') return job.type === 'Full-time';
    if (selectedFilter === 'remote') return job.location === 'Remote';
    if (selectedFilter === 'contract') return job.type === 'Contract';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-slate-800">Job Portal</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Discover exciting career opportunities from top companies
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Location Filter */}
          <select className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Locations</option>
            <option>Remote</option>
            <option>San Francisco, CA</option>
            <option>New York, NY</option>
            <option>Austin, TX</option>
          </select>

          {/* Search Button */}
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedFilter === filter.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            {filter.label} <span className="ml-1 text-sm">({filter.count})</span>
          </button>
        ))}
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 p-6"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              {/* Job Info */}
              <div className="flex-1 space-y-3">
                <div className="flex items-start gap-4">
                  {/* Company Logo */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                    {job.logo}
                  </div>

                  {/* Job Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-slate-800 hover:text-blue-600 cursor-pointer">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-600">
                      <span className="font-medium">{job.company}</span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm line-clamp-2 md:ml-16">
                  {job.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 md:ml-16">
                  {job.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Salary and Apply */}
              <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-4 text-right">
                <div className="flex-1 md:flex-none">
                  <div className="text-lg font-semibold text-slate-800">{job.salary}</div>
                  <div className="text-sm text-slate-500">{job.posted}</div>
                </div>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Post Job CTA */}
      <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Looking to Hire?</h2>
        <p className="mb-6 opacity-90">
          Post your job openings and connect with talented professionals
        </p>
        <button className="px-6 py-3 bg-white text-slate-800 rounded-lg font-medium hover:bg-slate-50 transition-colors">
          Post a Job
        </button>
      </div>
    </div>
  );
};

export default JobPortal;
