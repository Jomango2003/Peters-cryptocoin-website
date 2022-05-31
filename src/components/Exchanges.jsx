import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'

import { useGetExchangesQuery } from '../services/cryptoApi';

 const Exchanges = () => {
  // const { data, isFetching } = useGetExchangesQuery();
  // const exchangesList = data?.data?.exchanges;
  // if(isFetching) return "loading..."

  // i need premium plan for the api end point :()
  return (
    <>
    <Row>
      <Col span={6}>Exchanges</Col>
      <Col span={6}>24h Trade Volume</Col>
      <Col span={6}>Markets</Col>
      <Col span={6}>Change</Col>
    </Row>
    {/* {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))} */}
    </>
  )
}

export default Exchanges;