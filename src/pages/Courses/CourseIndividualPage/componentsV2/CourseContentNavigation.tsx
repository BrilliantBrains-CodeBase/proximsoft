import React, { useState } from 'react';
import type { CourseData } from '../../../../types/course';

interface CourseContentProps {
  courseData: CourseData;
}

const CourseContentNavigation: React.FC<CourseContentProps> = ({ courseData }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const { course_details, learning_content, target_audience, curriculum, career_outcomes, faqs } = courseData;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'career', label: 'Career & Outcomes' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const ArrowBullet = () => (
    <span
      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: 'linear-gradient(135deg, #FFC224, #f0a500)' }}
    >
      <svg width="12" height="10" viewBox="0 0 16 14" fill="none">
        <path
          d="M1 7L15 7M15 7L9 1M15 7L9 13"
          stroke="#1a1a1a"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );

  const BulletList = ({ items }: { items: string[] }) => (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <ArrowBullet />
          <span className="text-gray-800 text-sm sm:text-[15px] font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full font-sans py-6">

      {/* ── Tab Bar ── */}
      {/* ── Tab Bar ── */}
<div className="flex items-center gap-3 flex-wrap mb-6">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
        activeTab === tab.id
          ? 'bg-[#5751E1] text-white hover:bg-[#FFC224] hover:text-[#161439]'
          : 'bg-gray-100 text-gray-500 hover:bg-[#FFC224] hover:text-[#161439]'
      }`}
      style={{
        boxShadow: activeTab === tab.id ? '6px 6px 0px 0px #000000' : 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translate(4px, 4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          activeTab === tab.id ? '6px 6px 0px 0px #000000' : 'none';
        e.currentTarget.style.transform = 'translate(0px, 0px)';
      }}
    >
      {tab.label}
    </button>
  ))}
</div>

      {/* ── Content Panel ── */}
      <div className="border border-gray-200 rounded-2xl bg-white p-6 sm:p-8 lg:p-10">

        {/* ── Overview ── */}
        {activeTab === 'overview' && (
          <div className="space-y-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Course Description</h2>
              <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed">
                {course_details.course_long_description}
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">What you'll learn in this course?</h2>
              <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-6">
                {course_details.course_short_description}
              </p>
              <BulletList items={learning_content.key_learnings} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Prerequisites</h2>
              <BulletList items={learning_content.prerequisites} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ideal Course For</h2>
              <BulletList items={target_audience} />
            </div>
          </div>
        )}

        {/* ── Curriculum ── */}
        {activeTab === 'curriculum' && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Course Curriculum</h2>
            <p className="text-gray-500 text-sm mb-6">
              {curriculum.summary.total_modules} Modules · {curriculum.summary.total_lectures} Lessons · {curriculum.summary.difficulty_level}
            </p>

            <div className="space-y-3">
              {curriculum.modules.map((module, index) => (
                <div key={module.module_number} className="border border-gray-200 rounded-xl overflow-hidden">
                  {/* Module Header */}
                  <button
                    onClick={() => setOpenModuleIndex(openModuleIndex === index ? null : index)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-200 hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #5751E1, #7b76e8)' }}
                      >
                        {module.module_number}
                      </span>
                      <div className="text-left">
                        <p className="text-sm sm:text-[15px] font-semibold text-gray-800">{module.module_name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{module.module_duration} · {module.topics.length} topics</p>
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openModuleIndex === index ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Module Topics */}
                  {openModuleIndex === index && (
                    <div className="px-5 pb-4 pt-1 bg-gray-50 border-t border-gray-100">
                      <ul className="space-y-2">
                        {module.topics.map((topic, tIndex) => (
                          <li key={tIndex} className="flex items-center gap-2.5 text-sm text-gray-600 py-1">
                            <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" />
                              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
                            </svg>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Career & Outcomes ── */}
        {activeTab === 'career' && (
          <div className="space-y-10">

            {/* Career Roles */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Career Roles</h2>
              <BulletList items={career_outcomes.career_roles} />
            </div>

            {/* Target Audience */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Who Should Enroll</h2>
              <BulletList items={target_audience} />
            </div>

            {/* Top Hiring Domains */}
            {career_outcomes.top_hiring_domains && career_outcomes.top_hiring_domains.length > 0 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Top Hiring Domains</h2>
                <div className="flex flex-wrap gap-2">
                  {career_outcomes.top_hiring_domains.map((domain, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium text-indigo-700 border border-indigo-100"
                      style={{ background: '#f0effe' }}
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Outcome Metrics */}
            {/* <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Outcome Metrics</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Success Rate', value: career_outcomes.outcome_metrics.student_success_rate },
                  { label: 'Completion Rate', value: career_outcomes.outcome_metrics.student_completion_rate },
                  { label: 'Placement Rate', value: career_outcomes.outcome_metrics.placement_rate },
                  { label: 'Students Placed', value: career_outcomes.outcome_metrics.students_placed || 'N/A' },
                  { label: 'Internships', value: career_outcomes.outcome_metrics.students_internships || 'N/A' },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-4 text-center border border-gray-100"
                    style={{ background: '#f8f7ff' }}
                  >
                    <p className="text-lg sm:text-xl font-bold text-indigo-600">{metric.value}</p>
                    <p className="text-xs text-gray-500 mt-1 font-medium">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div> */}

          </div>
        )}

        {/* ── FAQs ── */}
        {activeTab === 'faqs' && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={faq.faq_id} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className={`text-sm sm:text-[15px] font-semibold pr-4 ${openFaqIndex === index ? 'text-indigo-600' : 'text-gray-800'}`}>
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                      style={{ background: openFaqIndex === index ? '#5751E1' : '#f1f1f1' }}
                    >
                      <svg className={`w-4 h-4 ${openFaqIndex === index ? 'text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                  {openFaqIndex === index && (
                    <div className="px-5 pb-5 pt-1 bg-gray-50 border-t border-gray-100">
                      <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CourseContentNavigation;