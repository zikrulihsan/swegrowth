import { useState } from 'react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Mock data - replace with real data from your API
  const upcomingEvents = [
    {
      id: 1,
      title: 'Web Development Workshop',
      date: '2025-11-15',
      time: '14:00',
      description: 'Learn modern web development techniques with React and Tailwind CSS',
      poster: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      location: 'Online',
    },
    {
      id: 2,
      title: 'Career Growth Seminar',
      date: '2025-11-20',
      time: '16:00',
      description: 'Expert insights on career development and professional growth',
      poster: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
      location: 'Hybrid',
    },
  ];

  const eventRecordings = [
    {
      id: 1,
      title: 'Introduction to React Hooks',
      date: '2025-10-25',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
      spotifyId: '3hTJKJzMaAlVpyIpVSbZZW', // Replace with actual Spotify podcast ID
    },
    {
      id: 2,
      title: 'Building Scalable Applications',
      date: '2025-10-18',
      youtubeId: 'dQw4w9WgXcQ',
      spotifyId: null,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-slate-800">Events</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Join our events and stay connected with the community
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-6 py-3 font-medium transition-colors border-b-2 ${
            activeTab === 'upcoming'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Upcoming Events
        </button>
        <button
          onClick={() => setActiveTab('recordings')}
          className={`px-6 py-3 font-medium transition-colors border-b-2 ${
            activeTab === 'recordings'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Event Recordings
        </button>
      </div>

      {/* Upcoming Events */}
      {activeTab === 'upcoming' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 overflow-hidden"
            >
              {/* Event Poster */}
              <div className="h-56 overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500">
                <img
                  src={event.poster}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-slate-800 flex-1">
                    {event.title}
                  </h3>
                  <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                    {event.location}
                  </span>
                </div>

                <p className="text-slate-600 text-sm">{event.description}</p>

                {/* Date and Time */}
                <div className="flex items-center space-x-4 text-sm text-slate-500 pt-3 border-t border-slate-100">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </span>
                </div>

                {/* Register Button */}
                <button className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Event Recordings */}
      {activeTab === 'recordings' && (
        <div className="space-y-8">
          {eventRecordings.map((recording) => (
            <div
              key={recording.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">{recording.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {new Date(recording.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>

              {/* YouTube Embed */}
              {recording.youtubeId && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-700 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Video Recording
                  </h4>
                  <div className="aspect-video rounded-lg overflow-hidden bg-slate-900">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${recording.youtubeId}`}
                      title={recording.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Spotify Embed */}
              {recording.spotifyId && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-700 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Audio Podcast
                  </h4>
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      className="w-full h-32 md:h-20"
                      src={`https://open.spotify.com/embed/episode/${recording.spotifyId}`}
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
