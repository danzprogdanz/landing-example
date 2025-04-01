import React from 'react'
import styled from 'styled-components'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  $backgroundColor?: string
  padding?: string
  /** For semantic HTML5 structure */
  ariaLabel?: string
}

const SectionWrapper = styled.section<Omit<SectionWrapperProps, 'children' | 'className'>>`
  width: 100%;
  padding: ${({ padding }) => padding || '4rem 1rem'};
  background: ${({ $backgroundColor, theme }) => 
    $backgroundColor || theme?.background || 'transparent'};
  position: relative;
  overflow-x: hidden;

  /* Hard-coded breakpoints */
  @media (min-width: 768px) {
    padding: ${({ padding }) => padding || '6rem 2rem'};
  }

  @media (min-width: 1200px) {
    max-width: 1440px;
    margin: 0 auto;
    padding: ${({ padding }) => padding || '8rem 2rem'};
  }

  scroll-margin-top: 80px;
`

export const SectionWrapperComponent: React.FC<SectionWrapperProps> = ({
  children,
  className,
  ariaLabel,
  ...rest
}) => {
  return (
    <SectionWrapper
      className={className}
      aria-label={ariaLabel}
      role="region"
      {...rest}
    >
      {/* Hard-coded inner container styles */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        height: '100%'
      }}>
        {children}
      </div>
    </SectionWrapper>
  )
}