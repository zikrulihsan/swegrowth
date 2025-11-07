import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchCourses = async () => {
  const { data } = await axios.get('https://goakal.com/api/school/ahsanprojectsbw/landing-info');
  return data;
};

const Courses = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <div className="text-red-600 font-semibold mb-2">Unable to load courses</div>
        <p className="text-red-500 text-sm">Please check your connection and try again later.</p>
      </div>
    );
  }

  // Parse the API data - adjust based on actual API response structure
  const courses = data?.courses || data?.programs || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-slate-800">Our Courses</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Discover our comprehensive courses designed to help you grow your skills and advance your career.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 overflow-hidden"
            >
              {/* Course Image */}
              {course.image && (
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title || course.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Course Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  {course.title || course.name || 'Course Title'}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-3">
                  {course.description || 'Learn essential skills with expert instructors.'}
                </p>

                {/* Course Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    {course.duration && (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {course.duration}
                      </span>
                    )}
                    {course.level && (
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                        {course.level}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))
        ) : (
          // Placeholder courses when API doesn't return data
          <>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-slate-800">Course {i}</h3>
                  <p className="text-slate-600 text-sm">
                    Master essential skills with comprehensive curriculum and hands-on projects.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm text-slate-500">8 weeks</span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      Beginner
                    </span>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Courses;
