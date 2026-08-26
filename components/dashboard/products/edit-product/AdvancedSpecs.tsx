import { Tag } from 'lucide-react'
import React from 'react'

const AdvancedSpecs = () => {

    
const inputClass =
  "w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10";

const labelClass =
  "mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-400";
  
  return (
           <section>
                <div className="mb-5 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Tag size={11} />
                  </span>
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                    Advanced Specs
                  </h2>
                </div>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="model" className={labelClass}>
                      Model Name / Number
                    </label>
                    <input
                      id="model"
                      name="model"
                      defaultValue="17 pro"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="warranty" className={labelClass}>
                      Warranty Period
                    </label>
                    <input
                      id="warranty"
                      name="warranty"
                      defaultValue="e.g. 1 Year Official"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="technical-specs" className={labelClass}>
                      Technical Specifications
                    </label>
                    <textarea
                      id="technical-specs"
                      name="technicalSpecs"
                      rows={4}
                      placeholder="Key technical specs..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>
              </section>
  )
}

export default AdvancedSpecs