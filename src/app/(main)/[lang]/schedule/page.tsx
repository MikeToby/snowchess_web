'use client';

import React, { useState, use } from 'react';
import { Phone, MapPin, Clock, Calendar as CalendarIcon, User, Camera, Building2, Send, Check, X } from 'lucide-react';
import { FloatingCapsuleNav, Footer } from '@/components';
import { WeChatIcon } from '@/components/icons/WeChatIcon';
import { siteConfig } from '@/lib/site';

const servicePricing = [
  { name: '商业摄影', nameEn: 'Commercial', price: '1000-3000元/场', icon: Building2 },
  { name: '研学摄影', nameEn: 'Study', price: '1000元/天', icon: Camera },
  { name: '旅行跟拍', nameEn: 'Travel', price: '1000元/天', icon: Camera },
  { name: '婚礼跟拍', nameEn: 'Wedding', price: '1500元/场', icon: Camera },
  { name: '无人机航拍', nameEn: 'Drone', price: '500元/增额', icon: Camera },
  { name: '个人摄影', nameEn: 'Portrait', price: '1000元/次', icon: User },
];

const photoTypes = [
  { value: 'commercial', label: '商业摄影 (1000-3000元/场)', labelEn: 'Commercial (¥1000-3000)' },
  { value: 'study', label: '研学摄影 (1000元/天)', labelEn: 'Study (¥1000/day)' },
  { value: 'travel', label: '旅行跟拍 (1000元/天)', labelEn: 'Travel (¥1000/day)' },
  { value: 'wedding', label: '婚礼跟拍 (1500元/场)', labelEn: 'Wedding (¥1500)' },
  { value: 'drone', label: '无人机航拍 (500元/增额)', labelEn: 'Drone (¥500)' },
  { value: 'portrait', label: '个人摄影 (1000元/次)', labelEn: 'Portrait (¥1000)' },
];

// Sample busy dates
const busyDates = ['2024-02-10', '2024-02-14', '2024-02-15', '2024-02-20', '2024-02-25'];

export default function SchedulePage(props: { params: Promise<{ lang: string }> }) {
  const params = use(props.params);
  const lang = params.lang;
  const isZh = lang === 'zh';
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '',
    clientLevel: 'personal',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const isBusy = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return busyDates.includes(dateStr);
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return dateStr === selectedDate;
  };

  const handleDateClick = (day: number) => {
    if (isBusy(day)) return;
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dateStr);
    setFormData({ ...formData, date: dateStr });
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <FloatingCapsuleNav locale={lang} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-snow-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-black mb-4">
            {isZh ? '档期查询' : 'Check Availability'}
          </h1>
          <p className="text-medium-gray max-w-xl mx-auto">
            {isZh 
              ? '选择您需要的摄影服务时间，我们将尽快与您联系' 
              : 'Select your preferred time and we will contact you soon'}
          </p>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <button onClick={prevMonth} className="p-2 hover:bg-snow-gray rounded-full transition-colors">
                ←
              </button>
              <h3 className="text-lg font-semibold">
                {currentYear}年{currentMonth + 1}月
              </h3>
              <button onClick={nextMonth} className="p-2 hover:bg-snow-gray rounded-full transition-colors">
                →
              </button>
            </div>

            {/* Week Days */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['日', '一', '二', '三', '四', '五', '六'].map((day) => (
                <div key={day} className="text-center text-sm text-medium-gray py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                const busy = isBusy(day);
                const isTodayDate = isToday(day);
                const selected = isSelected(day);
                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    disabled={busy}
                    className={`
                      aspect-square rounded-lg text-sm font-medium transition-all
                      ${busy ? 'bg-red-100 text-red-700 cursor-not-allowed' : ''}
                      ${isTodayDate ? 'border-2 border-gold text-gold' : ''}
                      ${selected ? 'bg-gold text-white' : ''}
                      ${!busy && !isTodayDate && !selected ? 'hover:bg-snow-gray' : ''}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-snow-gray">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-100" />
                <span className="text-xs text-medium-gray">{isZh ? '可预约' : 'Available'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-100" />
                <span className="text-xs text-medium-gray">{isZh ? '已约满' : 'Booked'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border-2 border-gold" />
                <span className="text-xs text-medium-gray">{isZh ? '今天' : 'Today'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-snow-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            {isZh ? '预约咨询' : 'Book Inquiry'}
          </h2>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">{isZh ? '姓名' : 'Name'}</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-light-gray" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder={isZh ? '请输入您的姓名' : 'Enter your name'}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{isZh ? '联系电话' : 'Phone'}</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-light-gray" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder={isZh ? '请输入联系电话' : 'Enter your phone'}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{isZh ? '摄影类型' : 'Photography Type'}</label>
              <select
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent appearance-none"
              >
                <option value="">{isZh ? '请选择' : 'Select'}</option>
                {photoTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {isZh ? type.label : type.labelEn}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{isZh ? '客户层级' : 'Client Type'}</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="clientLevel"
                    value="enterprise"
                    checked={formData.clientLevel === 'enterprise'}
                    onChange={(e) => setFormData({ ...formData, clientLevel: e.target.value })}
                    className="w-4 h-4 text-gold"
                  />
                  <span>{isZh ? '企业客户' : 'Enterprise'}</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="clientLevel"
                    value="personal"
                    checked={formData.clientLevel === 'personal'}
                    onChange={(e) => setFormData({ ...formData, clientLevel: e.target.value })}
                    className="w-4 h-4 text-gold"
                  />
                  <span>{isZh ? '个人客户' : 'Personal'}</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{isZh ? '期望日期' : 'Preferred Date'}</label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-light-gray" />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{isZh ? '留言' : 'Message'}</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
                placeholder={isZh ? '请描述您的需求...' : 'Describe your needs...'}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gold text-white rounded-lg font-semibold hover:bg-gold-light transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {isZh ? '提交预约' : 'Submit Booking'}
            </button>
          </form>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            {isZh ? '服务定价' : 'Service Pricing'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePricing.map((service, index) => (
              <div key={index} className="bg-snow-cream rounded-xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold">{isZh ? service.name : service.nameEn}</h3>
                  <p className="text-gold font-medium">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-snow-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            {isZh ? '联系方式' : 'Contact Us'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: WeChatIcon, label: isZh ? '微信' : 'WeChat', value: siteConfig.wechat },
              { icon: Phone, label: isZh ? '电话' : 'Phone', value: siteConfig.phone },
              { icon: MapPin, label: isZh ? '服务范围' : 'Area', value: isZh ? siteConfig.serviceArea : `Serving ${siteConfig.serviceArea}` },
              { icon: Clock, label: isZh ? '工作时间' : 'Hours', value: '9:00 - 18:00' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <p className="text-medium-gray text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1 hover:bg-snow-gray rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {isZh ? '预约成功' : 'Booking Successful'}
            </h3>
            <p className="text-medium-gray text-sm mb-4">
              {isZh 
                ? '我们将尽快与您联系，请保持电话畅通' 
                : 'We will contact you soon'}
            </p>
            <div className="bg-snow-cream rounded-xl p-4">
              <p className="text-sm text-medium-gray mb-2">{isZh ? '添加微信咨询' : 'Add WeChat'}</p>
              <div className="w-32 h-32 bg-white border-2 border-gold rounded-lg mx-auto flex items-center justify-center">
                <span className="text-xs text-medium-gray">WeChat QR</span>
              </div>
              <p className="text-xs text-medium-gray mt-2">SnowChess_Photo</p>
            </div>
          </div>
        </div>
      )}

      <Footer locale={lang} />
    </main>
  );
}
