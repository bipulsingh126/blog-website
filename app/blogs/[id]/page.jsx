'use client'
import { assets, blog_data } from '@/Assets/assets'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
  const [data, setData] = useState(null)

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i])
        break
      }
    }
  }

  useEffect(() => {
    fetchBlogData()
  }, [])

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href='/'>
            {' '}
            <Image
              src={assets.logo}
              width={180}
              alt="blooger"
              className="w-[130px] sm:w-auto "
            />
          </Link>

          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get started
            <Image
              src={assets.arrow}
              alt="arrow"
              width={20}
              height={20}
              className="w-auto h-auto"
            />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto  ">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full "
            src={data.author_img}
            width={60}
            height={60}
            alt="auther"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}{' '}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 ">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={780}
          alt="image"
        />
        <h1 className="my-8 text-2xl font-semibold">Introduction:</h1>
        <p>{data.description} </p>
        <h3 className="my-5 text-[18px] font-semibold ">
          Step 1 : self-Reflection and Goal Setting{' '}
        </h3>
        <p className="my-3">
          Begin your journey by taking time for honest self-reflection. Consider
          what truly matters to you and what you want to achieve in life. Set
          SMART goals - Specific, Measurable, Achievable, Relevant, and
          Time-bound objectives that align with your personal values.
        </p>
        <p className="my-3">
          Create a vision board or journal to document your aspirations. This
          visual representation will help maintain focus and motivation
          throughout your journey. Remember, effective goal setting is the
          foundation of successful lifestyle management.
        </p>
        <h3 className="my-5 text-[18px] font-semibold ">
          Step 2 : Time Management and Prioritization{' '}
        </h3>
        <p className="my-3">
          Master the art of time management by implementing effective scheduling
          techniques. Use tools like digital calendars or planners to organize
          your daily activities. Break down larger goals into smaller,
          manageable tasks and prioritize them based on importance and urgency.
        </p>
        <p className="my-3">
          Learn to say no to activities that don't align with your goals.
          Remember that time is your most valuable resource - invest it wisely
          in activities that bring you closer to your objectives and contribute
          to your personal growth.
        </p>
        <h3 className="my-5 text-[18px] font-semibold ">
          Step 3 : Maintaining Balance and Wellness{' '}
        </h3>
        <p className="my-3">
          Strike a healthy balance between work, personal life, and self-care.
          Incorporate regular exercise, proper nutrition, and adequate rest into
          your routine. Remember that physical health directly impacts mental
          clarity and emotional well-being.
        </p>
        <p className="my-3">
          Practice mindfulness and stress management techniques to maintain
          emotional equilibrium. Build meaningful relationships and nurture your
          support system, as social connections play a crucial role in overall
          life satisfaction.
        </p>
        <h3 className="my-5 text-[18px] font-semibold ">Conclusion </h3>
        <p className="my-3">
          Successfully managing your lifestyle is an ongoing journey that
          requires dedication, flexibility, and continuous adjustment. By
          following these steps and remaining committed to your goals, you can
          create a fulfilling and balanced life that aligns with your values and
          aspirations. Remember that progress takes time, and small consistent
          actions lead to significant long-term changes.
        </p>
        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article on social media{' '}
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} alt="facebook" width={50} />
            <Image src={assets.twitter_icon} alt="facebook" width={50} />
            <Image src={assets.googleplus_icon} alt="facebook" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  )
}

export default page
