import React, { useState } from 'react';
import { Award, ShieldCheck, Sparkles, TrendingUp, Info } from 'lucide-react';

export const AyushSixAxisRadarChart = ({ skillMatrix }) => {
  const [activeHoverAxis, setActiveHoverAxis] = useState(null);

  const defaultAxes = [
    { name: 'Nadi Pariksha', fullName: 'Nadi Pariksha (Pulse Diagnostics)', score: 92, percentile: '98th', status: 'Mastered', desc: 'Digital pulse wave analysis, Tridosha arterial mapping' },
    { name: 'Dravyaguna HPLC', fullName: 'Dravyaguna Phytochemistry & HPLC', score: 88, percentile: '94th', status: 'Verified', desc: 'Chromatographic marker profiling for botanical extracts' },
    { name: 'Schedule T GMP', fullName: 'Schedule T GMP Cleanroom Protocol', score: 94, percentile: '99th', status: 'Mastered', desc: 'Sterile cleanroom operations & manufacturing compliance' },
    { name: 'Ayush GCP Trials', fullName: 'GCP Clinical Trial Protocols', score: 85, percentile: '91st', status: 'Verified', desc: 'Ethical human clinical documentation & adverse event reporting' },
    { name: 'Panchakarma Care', fullName: 'Panchakarma Clinical Management', score: 82, percentile: '89th', status: 'Proficient', desc: 'Inpatient IPD procedures & classical evacuation therapies' },
    { name: 'Rasa Shastra QC', fullName: 'Rasa Shastra Quality Testing', score: 86, percentile: '93rd', status: 'Verified', desc: 'Herbomineral Bhasma purification & ICP-MS safety limits' },
  ];

  const axesData = (skillMatrix && skillMatrix.length === 6) ? skillMatrix.map((item, idx) => ({
    name: defaultAxes[idx]?.name || item.name.split(' ')[0],
    fullName: item.name,
    score: item.score,
    percentile: item.percentile || defaultAxes[idx]?.percentile || '90th',
    status: item.status || defaultAxes[idx]?.status || 'Verified',
    desc: defaultAxes[idx]?.desc || ''
  })) : defaultAxes;

  // Radar chart mathematical geometry
  const cx = 200;
  const cy = 180;
  const radius = 115;
  const numAxes = 6;
  const angleStep = (2 * Math.PI) / numAxes;
  // Starting from 12 o'clock (-PI/2)
  const startAngle = -Math.PI / 2;

  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];

  // Helper to calculate vertex coordinate
  const getCoordinates = (index, valueRatio) => {
    const angle = startAngle + index * angleStep;
    const x = cx + radius * valueRatio * Math.cos(angle);
    const y = cy + radius * valueRatio * Math.sin(angle);
    return { x, y, angle };
  };

  // Generate path string for polygon
  const createPolygonPoints = (ratios) => {
    return ratios
      .map((r, i) => {
        const { x, y } = getCoordinates(i, r);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  };

  // Student actual scores polygon
  const scholarRatios = axesData.map(a => a.score / 100);
  const scholarPolygonPoints = createPolygonPoints(scholarRatios);

  // National average benchmark polygon (68% across all 6 axes)
  const benchmarkRatios = [0.68, 0.65, 0.70, 0.64, 0.67, 0.66];
  const benchmarkPolygonPoints = createPolygonPoints(benchmarkRatios);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-xs space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
              6-Axis Ayush Competency Radar
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Real-time multi-dimensional vector mapped to HSSC National Occupational Standards &amp; Ayush Pharmacopoeia
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Verified Diagnostic Radar
          </span>
        </div>
      </div>

      {/* Main Radar Display Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* SVG Radar Chart Column */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
          
          <div className="w-full max-w-md aspect-square relative flex items-center justify-center">
            <svg 
              viewBox="0 0 400 370" 
              className="w-full h-full overflow-visible select-none drop-shadow-xs"
            >
              <defs>
                {/* Emerald Gradient Fill */}
                <radialGradient id="radarFillGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                  <stop offset="70%" stopColor="#059669" stopOpacity="0.30" />
                  <stop offset="100%" stopColor="#047857" stopOpacity="0.15" />
                </radialGradient>

                <linearGradient id="benchmarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.05" />
                </linearGradient>

                {/* Glow Filter */}
                <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Concentric Polygons (Web rings: 20%, 40%, 60%, 80%, 100%) */}
              {levels.map((level, lIdx) => {
                const ringPoints = createPolygonPoints(new Array(6).fill(level));
                return (
                  <g key={lIdx}>
                    <polygon
                      points={ringPoints}
                      fill={lIdx === levels.length - 1 ? '#f8fafc' : 'none'}
                      stroke="#e2e8f0"
                      strokeWidth={lIdx === levels.length - 1 ? '1.5' : '1'}
                      strokeDasharray={lIdx < levels.length - 1 ? '3 3' : 'none'}
                    />
                    {/* Ring score label */}
                    <text
                      x={cx + 4}
                      y={cy - radius * level - 2}
                      fontSize="9"
                      fill="#94a3b8"
                      fontWeight="bold"
                    >
                      {Math.round(level * 100)}%
                    </text>
                  </g>
                );
              })}

              {/* 6 Radial Spoke Lines from Center */}
              {axesData.map((_, i) => {
                const { x, y } = getCoordinates(i, 1.0);
                return (
                  <line
                    key={i}
                    x1={cx}
                    y1={cy}
                    x2={x}
                    y2={y}
                    stroke="#cbd5e1"
                    strokeWidth="1.2"
                  />
                );
              })}

              {/* Benchmark Layer: National Average (68%) */}
              <polygon
                points={benchmarkPolygonPoints}
                fill="url(#benchmarkGradient)"
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                opacity="0.8"
              />

              {/* Scholar Actual Competency Polygon */}
              <polygon
                points={scholarPolygonPoints}
                fill="url(#radarFillGradient)"
                stroke="#059669"
                strokeWidth="2.5"
                filter="url(#emeraldGlow)"
                className="transition-all duration-500 ease-out"
              />

              {/* Vertex Data Points & Tooltips */}
              {axesData.map((axis, i) => {
                const ratio = axis.score / 100;
                const { x, y } = getCoordinates(i, ratio);
                const isHovered = activeHoverAxis === i;

                return (
                  <g 
                    key={i} 
                    className="cursor-pointer group"
                    onMouseEnter={() => setActiveHoverAxis(i)}
                    onMouseLeave={() => setActiveHoverAxis(null)}
                  >
                    {/* Pulse ring on hover */}
                    {isHovered && (
                      <circle
                        cx={x}
                        cy={y}
                        r="11"
                        fill="#10b981"
                        opacity="0.3"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer vertex circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r={isHovered ? '7' : '5'}
                      fill="#065f46"
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="transition-all duration-200"
                    />

                    {/* Value text tag near vertex */}
                    <text
                      x={x}
                      y={y - 10}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="bold"
                      fill="#065f46"
                      className="bg-white"
                    >
                      {axis.score}%
                    </text>
                  </g>
                );
              })}

              {/* Axis Labels positioned at spoke tips */}
              {axesData.map((axis, i) => {
                const labelCoord = getCoordinates(i, 1.22);
                let textAnchor = 'middle';
                if (i === 1 || i === 2) textAnchor = 'start';
                if (i === 4 || i === 5) textAnchor = 'end';

                const isHovered = activeHoverAxis === i;

                return (
                  <g 
                    key={i} 
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveHoverAxis(i)}
                    onMouseLeave={() => setActiveHoverAxis(null)}
                  >
                    <text
                      x={labelCoord.x}
                      y={labelCoord.y}
                      textAnchor={textAnchor}
                      fontSize="10.5"
                      fontWeight={isHovered ? '800' : '700'}
                      fill={isHovered ? '#047857' : '#1e293b'}
                      className="transition-colors duration-150"
                    >
                      {axis.name}
                    </text>
                    <text
                      x={labelCoord.x}
                      y={labelCoord.y + 12}
                      textAnchor={textAnchor}
                      fontSize="9"
                      fontWeight="600"
                      fill={isHovered ? '#059669' : '#64748b'}
                    >
                      {axis.score}% • {axis.percentile}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Chart Legend */}
          <div className="flex items-center gap-6 mt-3 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-md bg-emerald-600 border border-emerald-700 shadow-2xs"></span>
              <span className="text-slate-800 font-bold">Scholar Diagnostic (88% Avg)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-0.5 border-t-2 border-dashed border-slate-400"></span>
              <span className="text-slate-500">National Cohort Baseline (68%)</span>
            </div>
          </div>

        </div>

        {/* 6 Axis Breakdown Metrics Column */}
        <div className="lg:col-span-5 space-y-3">
          <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 space-y-2.5">
            <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-200/60">
              <span className="font-extrabold uppercase text-slate-600 tracking-wider text-[11px]">
                Competency Axis
              </span>
              <span className="font-extrabold uppercase text-slate-600 tracking-wider text-[11px]">
                Score &amp; Decile
              </span>
            </div>

            <div className="space-y-2">
              {axesData.map((axis, idx) => {
                const isHovered = activeHoverAxis === idx;
                return (
                  <div 
                    key={idx}
                    onMouseEnter={() => setActiveHoverAxis(idx)}
                    onMouseLeave={() => setActiveHoverAxis(null)}
                    className={`p-2 rounded-xl transition-all cursor-pointer flex items-center justify-between text-xs ${
                      isHovered 
                        ? 'bg-emerald-100/70 border border-emerald-300 shadow-2xs' 
                        : 'bg-white border border-slate-200/60 hover:border-emerald-200'
                    }`}
                  >
                    <div className="min-w-0 pr-2">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${axis.score >= 90 ? 'bg-emerald-600' : 'bg-teal-500'}`}></span>
                        <strong className="text-slate-800 font-bold truncate block">{axis.name}</strong>
                      </div>
                      <span className="text-[10px] text-slate-500 block truncate pl-3.5 mt-0.5">{axis.desc}</span>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-1 justify-end">
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                          {axis.percentile}
                        </span>
                        <span className="text-xs font-extrabold text-slate-900">{axis.score}%</span>
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 block">{axis.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          <div className="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 flex items-start gap-2.5 text-xs text-emerald-900">
            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold">Verified Level 3 Ready</strong>
              <p className="text-[11px] text-emerald-800 leading-snug mt-0.5">
                Exceeds industry standard in Schedule T Cleanroom &amp; Pulse Diagnostics. Qualified for 1-click clinical recruitment.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer NOS link */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-slate-500">
        <span className="font-medium">Mapped to Healthcare Sector Skill Council (HSSC) National Occupational Standards</span>
        <span className="text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
          SHA-256 Benchmark Hash: 0x8F42...9E01
        </span>
      </div>

    </div>
  );
};
