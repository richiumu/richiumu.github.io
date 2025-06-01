import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { languagesData, experiencesData } from './about.constants';
import SpoilerText from '../../components/SpoilerText';
import { KOTONE_REGEX, KOTONE_NAMES_TO_HIGHLIGHT, KOTONE_HIGHLIGHT_CLASS, KOTONE_HIGHLIGHT_SVG_FILL } from '../../constants/appConfig';
import { highlightKotoneNames } from '../../utils/textHighlighter'; // Import the utility

// --- Icon Components (unchanged) ---
const GameControllerIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M6 12h4m-2 -2v4" />
    <line x1="15" y1="11" x2="15" y2="11.01" />
    <line x1="18" y1="13" x2="18" y2="13.01" />
  </svg>
);

const MusicChartIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);

const PaintBrushIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.39m3.421 3.42a15.995 15.995 0 001.622-3.39m3.75 0a1.5 1.5 0 00-.364-1.065l-2.553-2.553a1.5 1.5 0 00-2.121 0l-6.364 6.364a1.5 1.5 0 00-.424 1.06l-.272 3.046a1.5 1.5 0 001.67 1.67l3.046-.272a1.5 1.5 0 001.06-.424l2.553-2.553z" />
  </svg>
);
// --- End Icon Components ---

// Custom Tick for PolarAngleAxis to style Kotone's name
const CustomAngleTick = (props) => {
  const { x, y, payload, className, ...rest } = props; // Recharts tick props
  const originalText = payload.value;

  const tickFill = rest.style?.fill || '#A0AEC0';
  const tickFontSize = rest.style?.fontSize || 10;
  const tickFontFamily = rest.style?.fontFamily || 'Inter';

  const parts = originalText.split(KOTONE_REGEX).filter(Boolean);

  return (
    <text
      {...rest}
      x={x}
      y={y}
      className={className}
      fill={tickFill}
      fontSize={tickFontSize}
      fontFamily={tickFontFamily}
      textAnchor={rest.textAnchor || "middle"}
    >
      {parts.map((part, index) => {
        if (KOTONE_NAMES_TO_HIGHLIGHT.includes(part)) {
          return (
            <tspan key={index} fontWeight="bold" fill={KOTONE_HIGHLIGHT_SVG_FILL} className="text-glow-yellow">
              {part}
            </tspan>
          );
        }
        return <tspan key={index}>{part}</tspan>;
      })}
    </text>
  );
};


const AboutSection = ({ designerName, aboutText }) => {
  const hobbyDetails = [
    {
      title: "玩音遊",
      icon: <GameControllerIcon className="w-8 h-8 text-secondary mr-3" />,
      description: <>Arcaea三星、中二R17無限段緞帶、Dan rf Alpha通過、馬老弟Ex3v3通過，大概就這樣。<br />其他也沒啥好說的，<s>反正也沒有人在乎</s>。<br />總之，我有玩很多音遊。</>,
      delay: "0.2s",
      skills: [
        { subject: '爆發', A: 90, fullMark: 100 },
        { subject: '準度', A: 70, fullMark: 100 },
        { subject: '協調', A: 50, fullMark: 100 },
        { subject: '耐力', A: 80, fullMark: 100 },
        { subject: '4k', A: 70, fullMark: 100 },
        { subject: '非4k', A: 30, fullMark: 100 },
      ],
      gradientId: "rhythmGameSkillGradient",
      strokeColor: "#F6AD55" // secondary
    },
    {
      title: "寫譜面",
      icon: <MusicChartIcon className="w-8 h-8 text-secondary mr-3" />,
      description: <>從寫Deemo自製譜開始發家（？）。<br /><s>沒有寫很好</s>，但還是有在幫L開頭跟R開頭的遊戲寫譜。</>,
      delay: "0.3s",
      skills: [
        { subject: '音樂理解', A: 60, fullMark: 100 },
        { subject: '創意設計', A: 40, fullMark: 100 },
        { subject: '難度平衡', A: 40, fullMark: 100 },
        { subject: '態度嚴謹', A: 30, fullMark: 100 },
        { subject: '準時交稿', A: 1, fullMark: 100 },
      ],
      gradientId: "chartingSkillGradient",
      strokeColor: "#68D391" // A greenish color
    },
    {
      title: "畫插畫",
      icon: <PaintBrushIcon className="w-8 h-8 text-secondary mr-3" />,
      description: <>現在就是畫開心的，不過以後有想走職業的打算。<br /><SpoilerText>感謝史學與教程。<br /></SpoilerText></>,
      delay: "0.4s",
      skills: [
        { subject: '角色設計', A: 10, fullMark: 100 },
        { subject: '色彩運用', A: 50, fullMark: 100 },
        { subject: '透視運用', A: 20, fullMark: 100 },
        { subject: '構圖技巧', A: 30, fullMark: 100 },
        { subject: '對口偷捏的愛（？）', A: 10000, fullMark: 100 },
      ],
      gradientId: "illustrationSkillGradient",
      strokeColor: "#4FD1C5" // primary
    }
  ];

  const renderAboutTextWithBreaks = (text) => {
    const lines = text.split('\n');
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {highlightKotoneNames(line)}
        {index < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-neutral-light">
          關於 <span className="text-primary">{designerName}</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex justify-center animate-fade-in-up">
            <img
              src="https://imgpoi.com/i/B0VNX5.jpg"
              alt={designerName}
              className="rounded-full shadow-xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-primary"
            />
          </div>
          <div className="w-full md:w-2/3">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-neutral-light leading-relaxed whitespace-pre-line text-lg">
                {renderAboutTextWithBreaks(aboutText)}
              </p>
            </div>

            <div className="mt-10">
              <h4 className="text-2xl font-semibold text-neutral-light mb-6 font-display text-center md:text-left animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                各種方面（？）
              </h4>
              <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
                {hobbyDetails.map(hobby => {
                  let radiusDomainMax;
                  if (hobby.title === "畫插畫") {
                    // For "畫插畫", set the axis max to a very small number (1)
                    // The skill "對口偷捏的愛（？）" has A=10000.
                    // This should make it plot 10000x further than the "1" mark on the axis.
                    radiusDomainMax = 1; 
                  } else {
                    // For other charts, maintain original dynamic scaling.
                    const maxSkillValueForHobby = Math.max(...hobby.skills.map(skill => skill.A), 0);
                    // Ensure axis accommodates at least up to 100, or higher if skills exceed 100.
                    radiusDomainMax = Math.max(100, maxSkillValueForHobby);
                  }

                  return (
                    <div
                      key={hobby.title}
                      className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up transform hover:-translate-y-1 flex flex-col"
                      style={{ animationDelay: hobby.delay }}
                    >
                      <div className="flex items-center mb-3">
                        {hobby.icon}
                        <h5 className="text-xl font-semibold text-neutral-light font-display">{hobby.title}</h5>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4 whitespace-pre-line">{hobby.description}</p>

                      <div className="mt-auto w-full h-60 sm:h-64 bg-gray-900/50 p-2 rounded-lg">
                        <ResponsiveContainer width="100%" height="100%">
                          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={hobby.skills}>
                            <defs>
                              <linearGradient id={hobby.gradientId} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={hobby.strokeColor} stopOpacity={0.7}/>
                                <stop offset="95%" stopColor={hobby.strokeColor} stopOpacity={0.1}/>
                              </linearGradient>
                            </defs>
                            <PolarGrid stroke="#4A5568" />
                            <PolarAngleAxis
                              dataKey="subject"
                              tick={<CustomAngleTick style={{ fill: '#A0AEC0', fontSize: 10, fontFamily: 'Inter' }} />}
                            />
                            <PolarRadiusAxis
                              angle={30}
                              domain={[0, radiusDomainMax]}
                              tick={{ fill: '#718096', fontSize: 9 }}
                            />
                            <Radar
                              name={hobby.title}
                              dataKey="A"
                              stroke={hobby.strokeColor}
                              fill={`url(#${hobby.gradientId})`}
                              fillOpacity={0.8}
                              strokeWidth={2}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: 'rgba(26, 32, 44, 0.95)',
                                borderColor: hobby.strokeColor,
                                borderRadius: '0.5rem',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
                                padding: '8px 12px',
                              }}
                              labelStyle={{ color: '#F7FAFC', fontWeight: 'bold', marginBottom: '4px', display: 'block' }}
                              itemStyle={{ color: hobby.strokeColor }}
                              formatter={(value, name, props) => [`${value} / ${props.payload.fullMark}`, "熟練度"]}
                            />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h4 className="text-2xl font-semibold text-neutral-light mb-6 font-display text-center md:text-left">語言與經歷</h4>
              <div className="mb-6">
                <h5 className="text-xl font-semibold text-neutral-light mb-3 font-display">語言能力</h5>
                <ul className="space-y-2 pl-1">
                  {languagesData.map(lang => (
                    <li key={lang.name} className="flex items-center text-neutral-light">
                      <span className="font-medium w-32 md:w-40">{lang.name}:</span>
                      <span>{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-neutral-light mb-4 font-display">專業（？）經歷</h5>
                <ul className="space-y-4">
                  {experiencesData.map(exp => (
                    <li key={exp.title} className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h6 className="font-bold text-primary font-display text-lg">{exp.title}</h6>
                      {exp.period && <p className="text-sm text-gray-500 mb-1">{exp.period}</p>}
                      <p className="text-neutral-light text-sm leading-relaxed whitespace-pre-line">{exp.description}</p> {/* Retain whitespace-pre-line for other whitespace collapsing */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;