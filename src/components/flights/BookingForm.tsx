'use client'

import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useFlightsQuery } from '@/hooks/useFlightsQuery';
import { DevTool } from '@hookform/devtools'
import Loading from '@/components/common/Loading';
import FlightNotFound from '@/components/flights/FlightNotFound';
import SubmissionSuccessful from '@/components/flights/SubmissionSuccessful';
import TextArea from '@/components/common/TextArea';
import { useState } from 'react';
import SubmissionFailed from '@/components/flights/SubmissionFailed';

interface FormInputs {
  flightNumber: string;
  travelerName: string;
  phone: string;
  idNumber: string;
  otherInfo: string;
}

export default function BookingForm() {
  const { getValues, register, handleSubmit, formState: { errors }, control } = useForm<FormInputs>({ mode: 'onChange' });
  const { data, error, isLoading, isError, isSuccess } = useFlightsQuery();
  const [showNotFound, setShowNotFound] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false)

  const onSubmit: SubmitHandler<FormInputs> = (formData) => {
    if (isError || (data as any).message) {
      setShowError(true);
    } else if (isSuccess && data?.find(x => Number(x.FlightNumber) === Number(formData.flightNumber) && x.AirlineID.toLowerCase() === formData.idNumber.toLowerCase())) {
      setShowSuccess(true);
    } else {
      setShowNotFound(true);
    }
  };

  const handleRetry = () => {
    setShowNotFound(false);
  };

  const handleConfirm = () => {
    setShowNotFound(false);
    setShowSuccess(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 min-w-96">
        <Input
          label="航班編號"
          type="text"
          registration={register('flightNumber', {
            required: '航班編號不能為空', pattern: {
              value: /^[A-Za-z0-9]+$/,
              message: '航班編號只能接受英文大小寫與數字'
            }
          })}
          error={errors.flightNumber && errors.flightNumber?.message}
          placeholder="e.g., BR003"
        />
        <Input
          label="旅客資料"
          type="text"
          registration={register('travelerName', {
            required: '旅客資料不得為空', pattern: {
              value: /^[A-Za-z\s]+$/,
              message: '旅客資料只能接受英文大小寫與空格'
            }
          })}
          error={errors.travelerName && errors.travelerName?.message}
          placeholder="e.g., Ming Hsiao"
        />
        <Input
          label="電話"
          type="text"
          registration={register('phone', {
            required: '電話不能為空',
            pattern: {
              value: /^[0-9]{10,11}$/,
              message: '電話號碼格式不正確，應該為10到11個數字'
            }
          })}
          error={errors.phone && errors.phone?.message}
          placeholder="e.g., 0987654321"
        />
        <Input
          label="身分證字號/護照號碼"
          type="text"
          registration={register('idNumber', {
            required: '身分證字號/護照號碼不能為空', pattern: {
              value: /^[A-Za-z0-9]+$/,
              message: '身分證字號/護照號碼只能接受英文大小寫與數字'
            }
          })}
          error={errors.idNumber && errors.idNumber?.message}
          placeholder="e.g., A123456789"
        />
        <TextArea
          label="其他資料"
          registration={register('otherInfo', { required: '其他資料不能為空' })}
          error={errors.otherInfo && errors.otherInfo?.message}
        />

        {<Loading isOpen={isLoading} onClose={() => {}} />}
        {/* {isError && <div className="text-red-600">{(error as Error).message}</div>} */}

        <Button className="w-full" type="submit">下一步</Button>
      </form>
      <FlightNotFound isOpen={showNotFound} onClose={() => { setShowNotFound(false) }} flightNumber={`${getValues('flightNumber')}`} onRetry={handleRetry} onSubmit={handleConfirm} />
      <SubmissionSuccessful isOpen={showSuccess} onClose={() => { setShowSuccess(false) }} />
      <SubmissionFailed isOpen={showError} onClose={() => { setShowError(false) }} message={(error as Error)?.message ?? (data as any)?.message} />
      <DevTool control={control} />
    </>
  );
};
