import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, contact, service_type, date, budget, message } = body;

    // 验证必填字段
    if (!name || !contact || !service_type || !date) {
      return NextResponse.json(
        { error: '请填写所有必填字段' },
        { status: 400 }
      );
    }

    // 这里可以添加：
    // 1. 发送邮件
    // 2. 保存到数据库
    // 3. 发送到飞书/钉钉机器人
    
    // 目前只是模拟成功
    console.log('New booking:', { name, contact, service_type, date, budget, message });

    return NextResponse.json(
      { 
        success: true, 
        message: '预约提交成功！我们会尽快联系您确认详情。'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Booking submission error:', error);
    return NextResponse.json(
      { error: '提交失败，请稍后重试或直接联系我们' },
      { status: 500 }
    );
  }
}
